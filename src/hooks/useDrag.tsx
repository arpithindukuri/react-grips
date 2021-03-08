import { useContext, useEffect, useRef, useState } from "react";
import { throttle } from "lodash";

import GripsContext from "../context/GripsContext";
import {
	useDragPropTypes,
	draggedByTypes,
	dragStateTypes,
	useDragReturnTypes,
} from "../types/dragTypes";

export default function useDrag({
	draggableRef,
	handleRef,
	onDragStart,
}: useDragPropTypes): useDragReturnTypes {
	const hRef = useRef<HTMLDivElement | null>(null);
	const dRef = useRef<HTMLDivElement | null>(null);

	const { setHoverID, dropData, dragData } = useContext(GripsContext);

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

	useEffect(() => {
		dragState.isDragging && setHoverID(dragState.hoverID);
	}, [dragState.isDragging, setHoverID, dragState.hoverID]);

	//---------- UPDATE REF IF IT CHANGES ----------//
	useEffect(() => {
		if (draggableRef && dRef.current !== draggableRef.current)
			dRef.current = draggableRef.current;
		if (handleRef && hRef.current !== handleRef.current)
			hRef.current = handleRef.current;
	}, [draggableRef, handleRef]);

	//---------- ADD START EVENT LISTENERS ----------//
	useEffect(() => {
		// console.log(dRef, hRef);
		const ref = hRef.current !== null ? hRef : dRef;

		const node = ref.current;

		function onStart(e: MouseEvent | Touch, i: draggedByTypes) {
			// console.log("-------onStart-------");

			if (dRef.current) dRef.current.style.zIndex = "5000";

			onDragStart && onDragStart();

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
	}, [dRef, hRef, onDragStart]);

	//---------- UPDATE STATE ----------//
	useEffect(() => {
		function onMove(e: MouseEvent | Touch) {
			// console.log("-------onMove-------");
			const X = e.pageX - dragState.clickX;
			const Y = e.pageY - dragState.clickY;
			updateDropID.current(e.pageX, e.pageY);
			setDragState((prev) => {
				return {
					...prev,
					currentX: e.pageX,
					currentY: e.pageY,
					deltaX: X,
					deltaY: Y,
				};
			});
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

			dropData.dropHandlers[dragState.hoverID] &&
				dropData.dropHandlers[dragState.hoverID](dragData);

			setDragState((prev) => ({
				...prev,
				isDragging: false,
				draggedBy: 0,
				deltaX: 0,
				deltaY: 0,
				hoverID: "",
			}));

			setHoverID("");

			setTimeout(() => {
				if (dRef.current) dRef.current.style.zIndex = "unset";
			}, 300);
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
	}, [
		dragState.draggedBy,
		dragState.clickX,
		dragState.clickY,
		setHoverID,
		dragState.hoverID,
		dropData.dropHandlers,
		dragData,
	]);

	const updateDropID = useRef(
		throttle((x, y) => {
			let elements = document.elementsFromPoint(x, y);
			let drop: Element | undefined;
			elements.forEach((el) => {
				if (
					drop === undefined &&
					el?.getAttribute("data-dropid") &&
					el !== dRef.current
				) {
					drop = el;
				}
			});
			// Below, we check for isDragging, because sometimes this callback gets run after onStop() is called
			// giving incorrect state. This ensures that hoverID is set only if it should be, i.e. is dragging
			setDragState((prev) => {
				const h = prev.isDragging
					? drop?.getAttribute("data-dropid") || ""
					: "";
				return {
					...prev,
					hoverID: h,
				};
			});
		}, 256)
	);

	/**
	 * Not using this anymore, because of performance reasons.
	 * I suggest using React's style property instead,
	 * with sragState.deltaX and dragState.deltaY.
	 * React's style property seems to be the most performant way to do transforms, based on my tests.
	 */
	//---------- UPDATE TRANSFORM ----------//
	// useEffect(() => {
	// 	const node = dRef.current;
	// 	if (node) {
	// 		node.style.transition = dragState.isDragging ? "0s" : "0.3s";
	// 		node.style.transform = `translate(${dragState.deltaX}px, ${dragState.deltaY}px)`;
	// 		node.style.zIndex = dragState.isDragging ? "5000" : "";
	// 	}
	// }, [dragState]);

	return { draggableRef: dRef, handleRef: hRef, dragState: dragState };
}
