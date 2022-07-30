import React, { useState } from "react";
import HamburgerIcon from "../HamburgerIcon";

import "./styles.css";

const HeaderLinks = [
	{
		id: 1,
		label: "About",
		sectionId: "about_section"
	},
	{
		id: 2,
		label: "Experience",
		sectionId: "exp_section"
	},
	{
		id: 3,
		label: "Work",
		sectionId: "work_section"
	},
	{
		id: 4,
		label: "Contact",
		sectionId: "contact_section"
	}
];

const Header = () => {
	const [modal, setModal] = useState<boolean>(false);

	const navigateToSection = sectionId => {
		const ele = document.getElementById(sectionId);
		const headerOffset = 72;
		if (ele) {
			const elementPosition = ele.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
			// ele.scrollIntoView({ behavior: "smooth", block: "start" });
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth"
			});
		}
	};

	const handleClick = () => {
		const ele: HTMLElement | null = document.getElementById("hamburger-icon");
		if (ele) {
			ele.classList.toggle("change");
		}
		setModal(cur => !cur);
	};

	return (
		<header className="page__header">
			<div className="header__logo">
				<a href="/">HK</a>
			</div>
			<div className="links_div">
				<ul className="header__links">
					{HeaderLinks.map(link => (
						<li
							className="header__link__item"
							key={link.id}
							onClick={() => navigateToSection(link.sectionId)}
						>
							{link.label}
						</li>
					))}
				</ul>
				<div className="header__hamburger__icon">
					<HamburgerIcon handleClick={handleClick} />
				</div>
				{modal && (
					<div className="header__mobile__links__modal">
						{HeaderLinks.map(link => (
							<li
								className="header__link__item"
								key={link.id}
								onClick={() => {
									handleClick();
									navigateToSection(link.sectionId);
								}}
							>
								{link.label}
							</li>
						))}
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
