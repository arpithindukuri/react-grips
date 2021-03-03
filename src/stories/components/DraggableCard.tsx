import React from "react";
import Grip from "./Grip";
import styled from "styled-components";
import useDrag from "../../hooks/useDrag";

export interface CardProps {
	/**
	 * Card title
	 */
	title: string;

	/**
	 * Children held within this card
	 */
	children?: any;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 150px;
	background-color: white;
	padding: 2rem;
	border-radius: 1rem;
	border: 1px solid #ddd;
`;

const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

const Title = styled.h2`
	margin: 0px;
`;

export default function Card(props: CardProps) {
	const [dragRef, handleRef, dragstate] = useDrag({});

	return (
		<Container ref={dragRef}>
			<Header>
				<Title>{props.title}</Title>
				<Grip />
			</Header>
			{props.children}
		</Container>
	);
}
