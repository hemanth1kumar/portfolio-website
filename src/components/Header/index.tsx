import React from "react";
import { Link } from "wouter";

import "./styles.css";

const Header = () => {
	return (
		<header className="page__header">
			<div className="header__logo">
				<Link href="/">HK</Link>
			</div>
			<ul className="header__links">
				<li className="header__link__item">About</li>
				<li className="header__link__item">Experience</li>
				<li className="header__link__item">Work</li>
				<li className="header__link__item">Contact</li>
			</ul>
		</header>
	);
};

export default Header;
