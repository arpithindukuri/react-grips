import { createContext, Dispatch, SetStateAction } from "react";

export type DragDataType = {
	dragSource: string;
	height?: number;
	width?: number;
	payload?: { [key: string]: any };
};

export type DropHandlersType = {
	[dropID: string]: (props: DragDataType) => void;
};

export type DropDataType = {
	dropHandlers: DropHandlersType;
};

export type GripsContextValueType = {
	hoverID: string | null | undefined;
	setHoverID: Dispatch<SetStateAction<string | null | undefined>>;
	dragData: DragDataType;
	setDragData: Dispatch<SetStateAction<DragDataType>>;
	dropData: DropDataType;
	setDropData: Dispatch<SetStateAction<DropDataType>>;
};

export const defaultValue: GripsContextValueType = {
	hoverID: "",
	setHoverID: () => {},
	dragData: { dragSource: "", height: 0, width: 0 },
	setDragData: () => {},
	dropData: { dropHandlers: {} },
	setDropData: () => {},
};

const GripsContext = createContext<GripsContextValueType>(defaultValue);

export default GripsContext;
