import React from "react";

const ProjectsData = [
	{
		id: 1,
		title: "Social Network",
		description: "Simple Social networking app powered by MongoDB and Redux",
		tags: ["MERN", "React", "Redux", "Bootstrap"]
	},
	{
		id: 2,
		title: "E-commerce App",
		description: "E-commerce frontend application with filtering, live cart price changes",
		tags: ["React", "SCSS"]
	},
	{
		id: 3,
		title: "Static Responsive Website",
		description: "Highly responsive static application that adapts to any screen size",
		tags: ["HTML", "CSS"]
	},
	{
		id: 4,
		title: "Todo App",
		description: "Todo application in ReactJS with Redux as state manager",
		tags: ["React", "Redux", "CSS"]
	}
];

const Work = () => (
	<section className="work__wrapper" id="work_section">
		<h1 className="section__heading">Projects</h1>
		<div className="projects_list">
			{ProjectsData.map(p => (
				<ProjectCard
					key={p.id}
					title={p.title}
					description={p.description}
					tags={p.tags}
				/>
			))}
		</div>
	</section>
);

interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags }) => (
	<div className="project__card">
		<div className="project__card__header"></div>
		<div className="project__card__body">
			<h3 className="project__title">{title}</h3>
			<p className="project__desc">{description}</p>
		</div>
		<div className="project__card__footer">
			<div className="project__tags">
				{tags.map(t => (
					<span className="project__tags__item" key={t}>
						{t}
					</span>
				))}
			</div>
		</div>
	</div>
);

export default Work;
