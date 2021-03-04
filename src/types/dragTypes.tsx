export interface useDragPropTypes {
	/**
	 * Pass in a list of elements that can be dragged. Returns 1 ref by default.
	 */
	draggableRef?: React.MutableRefObject<HTMLDivElement | null>;

	/**
	 * Pass in the handle(s) by which the element(s) from draggableRefs must be dragged.
	 */
	handleRef?: React.MutableRefObject<HTMLDivElement | null>;
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
	/**
	 * Returns a list of elements that can be dragged. Returns 1 ref by default.
	 */
	draggableRef: React.MutableRefObject<HTMLDivElement | null>;

	/**
	 * Returns a list of handles by which the element(s) from draggableRefs can be dragged.
	 */
	handleRef: React.MutableRefObject<HTMLDivElement | null>;

	/**
	 * Returns the current state of this draggable object.
	 */
	dragState: dragStateTypes;
}