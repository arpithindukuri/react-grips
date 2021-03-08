import React from "react";

import { Meta } from "@storybook/react";

import DragOnlyImport from "./DragOnly";
import DragAndDropImport from "./DragAndDrop";

export default {
	title: "useDrag",
} as Meta;

export const DragOnly: React.VFC<{}> = () => <DragOnlyImport />;
export const DragAndDrop: React.VFC<{}> = () => <DragAndDropImport />;
