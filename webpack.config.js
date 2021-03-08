const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{ loader: "style-loader" }, // to inject the result into the DOM as a style block
					{ loader: "css-modules-typescript-loader" }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
					{ loader: "css-loader", options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
					{ loader: "sass-loader" }, // to convert SASS to CSS
					// NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
				],
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: [
					/node_modules/,
					/.storybook/,
					/assets/,
					/docs/,
					/public/,
					/src\/stories/,
				],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
		alias: {
			react: path.resolve(__dirname, "./node_modules/react"),
			"react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
		},
	},
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "lib"),
		libraryTarget: "commonjs2",
	},
	externals: {
		// Don't bundle react or react-dom
		react: {
			commonjs: "react",
			commonjs2: "react",
			amd: "React",
			root: "React",
		},
		"react-dom": {
			commonjs: "react-dom",
			commonjs2: "react-dom",
			amd: "ReactDOM",
			root: "ReactDOM",
		},
	},
};
