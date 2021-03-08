export interface useDragPropTypes {
	draggableRef?: React.MutableRefObject<HTMLDivElement | null>;
	handleRef?: React.MutableRefObject<HTMLDivElement | null>;
	onDragStart?: (props?: any) => void;
}

/**
 * 0 = no drag,
 * 1 = mouse drag,
 * 2 = touch drag
 */
export type draggedByTypes = 0 | 1 | 2;

export interface dragStateTypes {
	isDragging: boolean;
	draggedBy: draggedByTypes;
	clickX: number;
	clickY: number;
	currentX: number;
	currentY: number;
	deltaX: number;
	deltaY: number;
	hoverID: string;
}

export interface useDragReturnTypes {
	draggableRef: React.MutableRefObject<HTMLDivElement | null>;
	handleRef: React.MutableRefObject<HTMLDivElement | null>;
	dragState: dragStateTypes;
}