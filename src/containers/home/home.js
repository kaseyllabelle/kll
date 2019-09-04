import React, { Fragment, useState, useContext } from 'react';

import { appContext } from '../../App';
import { CURRENT_PAGE } from '../../context/constants'

import { projectsData } from '../../data/projectsData';

import Filters from '../../components/home.filters';
import Card from '../../components/home.card';

export default function Home(props)
{
  const [currentFilter, setCurrentFilter] = useState('All');
  const { appStore, appStoreDispatch } = useContext(appContext);

  const goToPageFn = (page) => {
    appStoreDispatch({ type: CURRENT_PAGE, payload: 'Projects' })
    window.location.href = `/project/${page.toLowerCase().replace(/\s/g, '-')}`;
  }

  const filterProjectsFn = (filter) => {
    setCurrentFilter(filter);
  }

  let projects = projectsData.filter((project) => {
    if(currentFilter === "All") {
      return projectsData
    }
    return project.filter.includes(currentFilter)
  });

  const filteredProjects = projects.map((project) => {
    return <Card key={project.id} {...project} onClickProp={goToPageFn} />
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
          <Filters filterProjectsProp={filterProjectsFn} />
        </div>
        <div className="row">
          {filteredProjects}
        </div>
      </main>
    </Fragment>
  )
}