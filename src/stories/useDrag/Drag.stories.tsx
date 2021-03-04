import React from "react";

import { Meta } from "@storybook/react";

import Simple from "./Simple";

export default {
	title: "useDrag",
} as Meta;

export const SimpleDraggable: React.VFC<{}> = () => <Simple />;
