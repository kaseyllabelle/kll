import React, { Fragment } from 'react';

import { projectsData } from '../../data/projectsData';

import ProjectPageImagery from '../../containers/project-page/project-page.imagery';
import ProjectPageDescription from '../../containers/project-page/project-page.description';

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
      <main id="mainContent" className="grid-container project-page">
        <div className="row">
          <div className="col col-7 col-s-6 col-xs-12 order-last">
            <ProjectPageImagery imageryProp={filteredData.images}/>
          </div>
          <div className="col col-5 col-s-6 col-xs-12 order-first">
            <ProjectPageDescription 
              nameProp={filteredData.name} 
              descriptionProp={filteredData.description}
              stackProp={filteredData.stack}
              urlProp={filteredData.url}
            />
          </div>
        </div>
      </main>
    </Fragment>
  )
}