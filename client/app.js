import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "normalize.css/normalize.css";
import "./static/styles/main.scss";

import Header from "./components/Header";
import Home from "./container/Home";
import Register from "./container/auth/Register";

const App = () => {
	return (
		<Router>
			<React.Fragment>
				<div className="container">
					<Header />
					<Switch>
						<Route path="/register" component={Register} />
						<Route path="/" component={Home} />
					</Switch>
				</div>
			</React.Fragment>
		</Router>
	);
};

export default App;
