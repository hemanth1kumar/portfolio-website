import React from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Intro from "./Intro";
import Work from "./Work";

const HomePage = () => (
	<div className="sections__wrapper">
		<Intro />
		<About />
		<Experience />
		<Work />
		<Contact />
		<Footer />
	</div>
);

export default HomePage;
