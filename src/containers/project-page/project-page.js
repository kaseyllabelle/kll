import React, {Fragment} from 'react';

import {projectsData} from '../../data/projectsData';

import ProjectPageDescription from '../../containers/project-page/project-page.description';
import ProjectPageImagery from '../../containers/project-page/project-page.imagery';

export default function ProjectPage(props)
{
	let currentProject = window.location.href.split('/');
	currentProject = currentProject[currentProject.length - 1];

	let filteredData = {};
	projectsData.forEach((project) => {
		if (currentProject === project.name.toLowerCase().replace(/\s/g, '-')) {
			filteredData = project;
		}
	});

	return(
		<Fragment>
			<section className="grid-container project-page">
				<div className="row">
					<div className="col col-7 col-s-6 col-xs-12 order-last">
						<ProjectPageImagery imageryProp={filteredData.images} />
					</div>
					<div className="col col-5 col-s-6 col-xs-12 order-first">
						<ProjectPageDescription 
							nameProp={filteredData.name} 
							description1Prop={filteredData.description1} 
							description2Prop={filteredData.description2} 
							description3Prop={filteredData.description3} 
							description4Prop={filteredData.description4} 
							description5Prop={filteredData.description5} 
							stackProp={filteredData.stack}
							urlProp={filteredData.url}
						/>
					</div>
				</div>
			</section>
		</Fragment>
	)
}