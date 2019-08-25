import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Nav(props)
{
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
								<NavLink exact to="/" className="primary" activeClassName="active">
									Projects
								</NavLink>
							</li>
							<li className="nav-list-item">
								<NavLink to="/info" className="primary" activeClassName="active">
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