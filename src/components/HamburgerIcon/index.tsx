import React from "react";

import "./styles.css";

interface Props {
	handleClick: () => void;
}

const HamburgerIcon: React.FC<Props> = ({ handleClick }) => (
	<>
		<div className="hamburger__icon" onClick={handleClick} id="hamburger-icon">
			<div className="bar1" />
			<div className="bar2" />
			<div className="bar3" />
		</div>
	</>
);

export default HamburgerIcon;
