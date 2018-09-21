import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

export default function Nav(props)
{
	return(
		<Fragment>
			<header className="full-width-container header">
				<div className="grid-container-alt">
					<div className="row justify-between align-end">
						<div className="col col-2 col-s-2 col-xs-12 logo">
							<Link to="/" className="logo">
								<img src="/images/logo.jpg" alt="Kasey L. Labelle logo" className="header-logo" />
							</Link>
						</div>
						<nav className="col col-10 col-s-10 col-xs-12 nav">
							<ul className="nav-list">
								<li className="nav-list-item"><a className="primary" href="/">Projects</a></li>
								<li className="nav-list-item"><a className="primary" href="/info">Info</a></li>
								<li className="nav-list-item"><a className="primary" href="/documents/kaseyllabelle_resume.pdf" target="_blank">Resume</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</Fragment>
	)
}