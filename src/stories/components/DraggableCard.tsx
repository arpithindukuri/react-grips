import React from "react";
// import Grip from "./Grip";
import styled from "styled-components";
import useDrag from "../../hooks/useDrag";

export interface CardProps {
	title: string;
	children?: any;
}

// const Container = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	width: 150px;
// 	background-color: grey;
// 	padding: 2rem;
// 	border-radius: 1rem;
// 	border: 1px solid #eee;
// 	:hover {
// 		transform: scale(1.1);
// 	}
// `;

const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export default function Card(props: CardProps) {
	const { draggableRef, handleRef, dragState } = useDrag({});

	return (
		<div
			ref={draggableRef}
			style={{
				display: "flex",
				flexDirection: "column",
				width: "150px",
				backgroundColor: "white",
				padding: "2rem",
				borderRadius: "1rem",
				border: "1px solid #eee",
				transition: dragState.isDragging ? "0s" : "0.3s",
				transform: `translate(${dragState.deltaX}px, ${dragState.deltaY}px)`,
				opacity: dragState.hoverID ? "0.5" : "unset",
			}}
		>
			<Header>
				<h2
					ref={handleRef}
					style={{
						margin: 0,
					}}
				>
					{props.title}
				</h2>
				{/* <Grip ref={handleRef} /> */}
			</Header>
			{props.children}
		</div>
	);
}
