import React, {Fragment} from 'react';

import {projectsData} from '../../data/projectsData';
import Filters from '../../components/home.filters';
import Card from '../../components/home.card';

export default class Home extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {
			currentFilter: "All"
		};
		this.filterProjectsFn = this.filterProjectsFn.bind(this);
	}

	goToPageFn(page) {
		window.location.href = `/project/${page.toLowerCase().replace(/\s/g, '-')}`;
	}

	filterProjectsFn(filter) {
		this.setState({
			currentFilter: filter
		});
	}

	render() {
		let projects = projectsData.filter((project) => {
			if(this.state.currentFilter === "All") {
				return projectsData
			}
			return project.filter.includes(this.state.currentFilter)
		});

		const filteredProjects = projects.map((project) => {
			return <Card key={project.id} {...project} onClickProp={this.goToPageFn} />
		})

		return(
			<Fragment>
				<main id="mainContent" className="grid-container">
					<div className="row">
						<div className="col">
							<h1 className="h1">Projects</h1>
						</div>
					</div>
					<div className="row">
						<Filters filterProjectsProp={this.filterProjectsFn} />
					</div>
					<div className="row">
						{filteredProjects}
					</div>
				</main>
			</Fragment>
		)
	}
}