import classNames from "classnames";
import { useCallback, useContext, useState } from "react";
import GripsContext, { DragDataType } from "../../context/GripsContext";

import GripsProvider from "../../context/GripsProvider";
import useDrag from "../../hooks/useDrag";
import useDrop from "../../hooks/useDrop";

import styles from "./DragAndDrop.module.scss";

interface CardProps {
	title: string;
	dragData?: {};
	children?: any;
}

interface DroppableProps {
	title: string;
	children?: any;
}

function DraggableCard(props: CardProps) {
	const handleDragStart = () => {
		setDragData({
			dragSource: "CARD",
			height: draggableRef.current?.clientHeight || 0,
			width: draggableRef.current?.clientWidth || 0,
			payload: { text: `${Math.random()}` },
		});
	};

	const { draggableRef, handleRef, dragState } = useDrag({
		onDragStart: handleDragStart,
	});

	const { setDragData } = useContext(GripsContext);

	return (
		<div
			ref={draggableRef}
			style={{
				transform: `translate(${dragState.deltaX}px, ${dragState.deltaY}px)`,
			}}
			className={classNames({
				[styles.Card]: true,
				[styles.TransformTransition]: dragState.isDragging,
				[styles.Opacity]: dragState.hoverID,
			})}
		>
			<div className={styles.Header}>
				<h2 className={styles.Grab} ref={handleRef}>
					{props.title}
				</h2>
			</div>
			{props.children}
		</div>
	);
}

function Droppable(props: DroppableProps) {
	const dropID = "drop1";
	const [list, setList] = useState([
		{
			title: "1",
			text: "one",
		},
		{
			title: "2",
			text: "two",
		},
		{
			title: "3",
			text: "three",
		},
		{
			title: "1",
			text: "one",
		},
		{
			title: "2",
			text: "two",
		},
		{
			title: "3",
			text: "three",
		},
	]);

	const { draggableRef, handleRef, dragState } = useDrag({});

	const dropHandler = useCallback((dragData: DragDataType) => {
		console.log("dropped");
		setList((prev) => [
			{
				title: `${dragData.dragSource}`,
				text: ` - ${dragData.payload?.text}`,
			},
			...prev,
		]);
	}, []);

	const { isDraggedOver, dragData } = useDrop({
		dropID: dropID,
		dropHandler: dropHandler,
	});

	return (
		<div
			ref={draggableRef}
			className={classNames({
				[styles.Droppable]: true,
				[styles.TransformTransition]: dragState.isDragging,
				[styles.Opacity]: dragState.hoverID,
			})}
			data-dropid={dropID}
			style={{
				transform: `translate(${dragState.deltaX}px, ${dragState.deltaY}px)`,
			}}
		>
			<div className={styles.Header}>
				<h2 className={styles.Grab} ref={handleRef}>
					{props.title}
				</h2>
			</div>
			<div
				className={styles.Placeholder}
				style={{
					height: isDraggedOver ? `${dragData.height}px` : "0px",
				}}
			>
				+
			</div>
			{list.map((item, index) => {
				return (
					<div className={styles.Item} key={index}>
						{item.title}
						{item.text}
					</div>
				);
			})}
			{props.children}
		</div>
	);
}

export default function DragAndDrop() {
	return (
		<GripsProvider>
			<div className={styles.Container}>
				<DraggableCard
					title='Drag Me'
					dragData={{ title: "this is new" }}
				>
					<p>
						text text text
						<br /> more text <br /> even more text!! (but longer)
						<br /> text
					</p>
				</DraggableCard>
				<Droppable title='DROP HERE' />
			</div>
		</GripsProvider>
	);
}
