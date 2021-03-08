import React, { useContext } from "react";
import Grip from "./Grip";
import styled from "styled-components";
import useDrag from "../../hooks/useDrag";
import GripsContext from "../../context/GripsContext";

export interface DroppableProps {
	/**
	 * Card title
	 */
	title: string;

	/**
	 * Children held within this card
	 */
	children?: any;
}

const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export default function Drop(props: DroppableProps) {
	const dropID = "drop1";
	const { draggableRef, handleRef, dragState } = useDrag({});
	const { hoverID } = useContext(GripsContext);

	return (
		<div
			ref={draggableRef}
			data-dropid={dropID}
			style={{
				display: "flex",
				flexDirection: "column",
				width: "200px",
				height: "500px",
				backgroundColor: "lightcoral",
				padding: "2rem",
				borderRadius: "1rem",
				border: "1px solid #eee",
				transition: dragState.isDragging ? "0s" : "0.3s",
				transform: `translate(${dragState.deltaX}px, ${dragState.deltaY}px)`,
			}}
		>
			<Header>
				<h2
					style={{
						margin: 0,
						color: "white",
					}}
				>
					{props.title}
				</h2>
				<Grip ref={handleRef} />
			</Header>
			<div
				style={{
					display: hoverID === dropID ? "inline-block" : "none",
					width: "100%",
					height: "100px",
					backgroundColor: "white",
				}}
			/>
			{props.children}
		</div>
	);
}
