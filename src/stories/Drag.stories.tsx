import React from "react";

import { Meta } from "@storybook/react";

import DragSimple from "./DragSimple";

export default {
	title: "useDrag",
	component: DragSimple,
} as Meta;

export const Simple: React.VFC<{}> = () => <DragSimple />;
