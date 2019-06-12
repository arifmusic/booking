require("offline-plugin/runtime").install();
import React from "react";

import "normalize.css/normalize.css";
import "./static/styles/main.scss";

import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
	return (
		<div className="container">
			<Header />
			<Content />
		</div>
	);
};

export default App;
