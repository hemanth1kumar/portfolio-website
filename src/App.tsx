import React from "react";
import { Route } from "wouter";

import HomePage from "./pages/home";
import Header from "./components/Header";

import "./index.css";

const App = () => (
	<div className="app_wrapper">
		<Header />
		<Route path="/">
			<HomePage />
		</Route>
	</div>
);

export default App;
