import DraggableCard from "../components/DraggableCard";
import styled from "styled-components";

export default function Drag() {
	const Container = styled.div`
		display: flex;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		align-items: center;
		justify-content: center;
		background-color: #f8f8f8;
	`;

	return (
		<Container>
			<DraggableCard title='A Card!'>
				<p>
					text text text<br /> more text <br /> even more text!! (but longer)
					<br /> text
				</p>
			</DraggableCard>
		</Container>
	);
}
