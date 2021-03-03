import React from "react";

import styled from "styled-components";
import { MdDragHandle } from "react-icons/md";

const StyledGrip = styled(MdDragHandle)`
	touch-action: none;
	height: 1.5rem;
	width: 1.5rem;
	color: #ddd;
	transition: 0.3s;
	&:hover {
		transform: scale(1.2);
		color: black;
		cursor: move; /* fallback if grab cursor is unsupported */
		cursor: grab;
		cursor: -moz-grab;
		cursor: -webkit-grab;
	}
	&:active {
		cursor: grabbing;
		cursor: -moz-grabbing;
		cursor: -webkit-grabbing;
	}
`;

const Grip = React.forwardRef((props, ref) => (
	<div ref={ref} style={{display: "flex", touchAction: "none"}}>
		<StyledGrip />
	</div>
));

export default Grip;
