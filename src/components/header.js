import React, { Fragment, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { appContext } from '../App';
import { CURRENT_PAGE } from '../context/constants'

export default function Nav(props)
{
  const { appStore, appStoreDispatch } = useContext(appContext);

  const projects = appStore.currentPage === 'Projects' ? 'primary active' : 'primary';
  const info = appStore.currentPage === 'Info' ? 'primary active' : 'primary';

  const updateActivePage = (e) => {
    appStoreDispatch({ type: CURRENT_PAGE, payload: e.currentTarget.innerHTML.toLowerCase() })
  }

  return(
    <Fragment>
      <a href="#mainContent" className="skip-link">Skip to main content</a>
      <header className="grid-container header">
        <div className="row justify-between align-end">
          <div className="col col-auto">
            <Link to="/" className="logo-wrapper">
              <img src="/images/logo.svg" alt="Kasey L. Labelle Home Page" className="logo"/>
            </Link>
          </div>
          <nav className="col col-auto col-xs-12">
            <ul className="nav-list">
              <li className="nav-list-item">
                <NavLink exact to="/" className={projects} onClick={(e) => {updateActivePage(e)}}>
                  Projects
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink to="/info" className={info} onClick={(e) => {updateActivePage(e)}}>
                  Info
                </NavLink>
              </li>
              <li className="nav-list-item">
                <NavLink to="/documents/kaseyllabelle_resume.pdf" target="_blank" className="primary">
                  Resume
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Fragment>
  )
}