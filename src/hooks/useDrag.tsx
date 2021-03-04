import { useEffect, useRef, useState } from "react";
import { throttle } from "lodash";

import {
	useDragPropTypes,
	draggedByTypes,
	dragStateTypes,
	useDragReturnTypes,
} from "src/types/dragTypes";

export default function useDrag({
	draggableRef,
	handleRef,
}: useDragPropTypes): useDragReturnTypes {
	const hRef = useRef<HTMLDivElement | null>(null);
	const dRef = useRef<HTMLDivElement | null>(null);

	const [dragState, setDragState] = useState<dragStateTypes>({
		isDragging: false,
		draggedBy: 0,
		clickX: 0,
		clickY: 0,
		currentX: 0,
		currentY: 0,
		deltaX: 0,
		deltaY: 0,
		hoverID: "",
	});

	//---------- UPDATE REF IF IT CHANGES ----------//
	useEffect(() => {
		if (draggableRef && dRef.current !== draggableRef.current)
			dRef.current = draggableRef.current;
		if (handleRef && hRef.current !== handleRef.current)
			hRef.current = handleRef.current;
	}, [draggableRef, handleRef]);

	//---------- ADD START EVENT LISTENERS ----------//
	useEffect(() => {
		function onStart(e: MouseEvent | Touch, i: draggedByTypes) {
			// console.log("-------onStart-------");
			setDragState((prev) => ({
				...prev,
				draggedBy: i,
				isDragging: true,
				clickX: e.pageX,
				clickY: e.pageY,
				currentX: e.pageX,
				currentY: e.pageY,
				deltaX: 0,
				deltaY: 0,
			}));
		}
		function onMouseDown(e: MouseEvent) {
			// console.log("-------onMouseDown-------");
			e.preventDefault();
			if (e.button !== 0) return;
			onStart(e, 1);
		}
		function onTouchStart(e: TouchEvent) {
			// console.log("-------onTouchStart-------");
			e.preventDefault();
			onStart(e.touches[0], 2);
		}

		// console.log(dRef, hRef);
		const ref = hRef.current !== null ? hRef : dRef;

		const node = ref.current;

		if (node) {
			node.addEventListener("mousedown", onMouseDown);
			// console.log("added mousedown");
			node.addEventListener("touchstart", onTouchStart);
			// console.log("added touchstart");
		}

		return () => {
			if (node) {
				node.removeEventListener("mousedown", onMouseDown);
				// console.log("removed mousedown in cleanup");
				node.removeEventListener("touchstart", onTouchStart);
				// console.log("removed touchstart in cleanup");
			}
		};
	}, [dRef, hRef]);

	//---------- UPDATE STATE ----------//
	useEffect(() => {
		function onMove(e: MouseEvent | Touch) {
			// console.log("-------onMove-------");
			const X = e.pageX - dragState.clickX;
			const Y = e.pageY - dragState.clickY;
			setDragState((prev) => ({
				...prev,
				currentX: e.pageX,
				currentY: e.pageY,
				deltaX: X,
				deltaY: Y,
			}));
		}
		function onMouseMove(e: MouseEvent) {
			// console.log("-------onMouseMove-------");
			e.preventDefault();
			onMove(e);
		}
		function onTouchMove(e: TouchEvent) {
			// console.log("-------onTouchMove-------");
			e.preventDefault();
			onMove(e.touches[0]);
		}

		function onStop() {
			// console.log("-------onStop-------");
			setDragState((prev) => ({
				...prev,
				isDragging: false,
				draggedBy: 0,
				deltaX: 0,
				deltaY: 0,
				hoverID: "",
			}));
		}
		function onMouseUp(e: MouseEvent) {
			// console.log("-------onMouseUp-------");
			e.preventDefault();
			onStop();
		}
		function onTouchEnd(e: TouchEvent) {
			// console.log("-------onTouchEnd-------");
			e.preventDefault();
			onStop();
		}

		if (dragState.draggedBy === 1) {
			document.addEventListener("mousemove", onMouseMove);
			// console.log("added mousemove");
			document.addEventListener("mouseup", onMouseUp);
			// console.log("added mouseup");
		}

		if (dragState.draggedBy === 2) {
			document.addEventListener("touchmove", onTouchMove, {
				passive: false,
			});
			// console.log("added touchmove");
			document.addEventListener("touchend", onTouchEnd, {
				passive: false,
			});
			// console.log("added touchup");
		}

		return () => {
			document.removeEventListener("mousemove", onMouseMove);
			// console.log("removed mousemove in cleanup");
			document.removeEventListener("mouseup", onMouseUp);
			// console.log("removed mouseup in cleanup");

			document.removeEventListener("touchmove", onTouchMove);
			// console.log("removed touchmove in cleanup");
			document.removeEventListener("touchend", onTouchEnd);
			// console.log("removed touchend in cleanup");
		};
	}, [dragState.draggedBy, dragState.clickX, dragState.clickY]);

	const updateDNDStore = useRef(
		throttle((x, y) => {
			let elements = document.elementsFromPoint(x, y);
			let drop: Element | undefined;
			elements.forEach((el) => {
				if (drop === undefined && el?.getAttribute("data-dropid")) {
					drop = el;
				}
			});
			if (drop !== undefined) {
				setDragState((prev) => ({
					...prev,
					hoverID: drop?.getAttribute("data-dropid") || "",
				}));
			}
		}, 128)
	);

	//---------- UPDATE TRANSFORM ----------//
	useEffect(() => {
		const node = dRef.current;
		if (node) {
			node.style.transform = `translate(${dragState.deltaX}px, ${dragState.deltaY}px)`;
			node.style.zIndex = dragState.isDragging ? "5000" : "";
		}
		updateDNDStore.current(dragState.currentX, dragState.currentY);
	}, [dragState]);

	return { draggableRef: dRef, handleRef: hRef, dragState: dragState };
}
