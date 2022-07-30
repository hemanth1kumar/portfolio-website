import React, { useState } from "react";

const Companies = {
	1: {
		id: 1,
		title: "PrimeNumbers",
		designation: "Member of Technical Staff 2",
		timeline: "Oct 2022 - Present",
		description: [
			"Convert Business logic and complex wireframes into reusable UI components",
			"Develop rich user experience UI with Responsive web design",
			"Stay updated with the latest trends in technologies",
			"Code maintenance, debugging issues, and solving client problems"
		]
	},
	2: {
		id: 2,
		title: "Truminds",
		designation: "Software Engineer",
		timeline: "June 2021 - Sept 2022",
		description: [
			"Designed and translated over 5 complex wireframes into attractive UI without compromising on code quality",
			"Heightened the performance of React application performance by ~10%"
		]
	}
};

const Experience = () => {
	const [curCompany, setCurCompany] = useState<number>(1);
	const companyVisible = Companies[curCompany];

	return (
		<section className="exp__section" id="exp_section">
			<h1 className="section__heading">Experience</h1>
			<div className="exp__wrapper">
				<ul className="exp__companies_list">
					{Object.keys(Companies).map(c => (
						<li
							className={`exp__companies_list_item ${
								Companies[c].id === curCompany ? "active" : ""
							}`}
							onClick={() => setCurCompany(Companies[c].id)}
							key={Companies[c].id}
						>
							{Companies[c].title}
						</li>
					))}
				</ul>
				<div className="exp__details">
					{
						<CompanyWorkExperience
							timeline={companyVisible.timeline}
							designation={companyVisible.designation}
							description={companyVisible.description}
						/>
					}
				</div>
			</div>
		</section>
	);
};

interface WorkExpProps {
	designation: string;
	timeline: string;
	description: string[];
}

const CompanyWorkExperience: React.FC<WorkExpProps> = ({ designation, timeline, description }) => (
	<div className="company__exp__item">
		<h3 className="company__exp__item__designation">{designation}</h3>
		<p className="company__exp__item__timeline">{timeline}</p>
		<ul className="company__exp__item__description_list">
			{description.map(d => (
				<li className="company__exp__item__description_item" key={d}>
					{d}
				</li>
			))}
		</ul>
	</div>
);

export default Experience;
