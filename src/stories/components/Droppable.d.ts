/// <reference types="react" />
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
export default function Drop(props: DroppableProps): JSX.Element;
