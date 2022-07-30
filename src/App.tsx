import React from "react";

import HomePage from "./pages/home";
import Header from "./components/Header";

import "./index.css";

const App = () => (
	<div className="app_wrapper">
		<Header />
		<HomePage />
	</div>
);

export default App;
