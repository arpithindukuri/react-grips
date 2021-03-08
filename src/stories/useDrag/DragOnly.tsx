import DraggableCard from "../components/DraggableCard";

export default function DragOnly() {
	return (
		<div
			style={{
				display: "flex",
				height: "100vh",
				width: "100vw",
				overflow: "hidden",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#f8f8f8",
			}}
		>
			<DraggableCard title='Drag Me'>
				<p>
					text text text
					<br /> more text <br /> even more text!! (but longer)
					<br /> text
				</p>
			</DraggableCard>
		</div>
	);
}
