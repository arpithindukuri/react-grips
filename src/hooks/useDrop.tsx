import { useContext, useEffect, useState } from "react";
import GripsContext, { DragDataType } from "../context/GripsContext";

export interface UseDropPropTypes {
	dropID: string;
	dropHandler: (props: DragDataType) => void;
}

export default function useDrop({ dropID, dropHandler }: UseDropPropTypes) {
	const { hoverID, dragData, setDropData } = useContext(GripsContext);
	const [isDraggedOver, setIsDraggedOver] = useState(false);

	useEffect(() => {
		setIsDraggedOver(() => hoverID === dropID);
	}, [hoverID, dropID]);

	useEffect(() => {
		setDropData((prev) => ({
			...prev,
			dropHandlers: { ...prev.dropHandlers, [dropID]: dropHandler },
		}));
	}, [setDropData, dropID, dropHandler]);

	return { isDraggedOver, dragData };
}
