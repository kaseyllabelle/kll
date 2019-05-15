import React, {Fragment} from 'react';

export default function Contact(props)
{
	return(
		<Fragment>
			<p className="body">If you’d like to learn more about me and my work, or chat about an opportunity to work together, get in&nbsp;touch!</p>
			<div className="social-links">
				<div className="social-link email">
					<a href="mailto:kll.design.dev@gmail.com" className="social-link-text">
						<i className="fas fa-envelope fa-fw fa-lg social-link-icon" title="Email"></i>
						kll.design.dev
					</a>
				</div>
				<div className="social-link google-form">
					<a href="https://goo.gl/forms/fcvTryc6Pryrxjfj2" className="social-link-text">
						<i className="fab fa-google fa-fw fa-lg social-link-icon" title="Form"></i>
						contact form
					</a>
				</div>
				<div className="social-link linkedin">
					<a href="https://www.linkedin.com/in/kaseyllabelle" className="social-link-text">
						<i className="fab fa-linkedin-in fa-fw fa-lg social-link-icon" title="LinkedIn"></i>
						linkedin.com/in/kaseyllabelle
					</a>
				</div>
				<div className="social-link github">
					<a href="https://github.com/kaseyllabelle" className="social-link-text">
						<i className="fab fa-github fa-fw fa-lg social-link-icon" title="GitHub"></i>
						github.com/kaseyllabelle
					</a>
				</div>
				<div className="social-link twitter">
					<a href="https://twitter.com/kaseyllabelle" className="social-link-text">
						<i className="fab fa-twitter fa-fw fa-lg social-link-icon" title="Twitter"></i>
						twitter.com/kaseyllabelle
					</a>
				</div>
				<div className="social-link tumblr">
					<a href="http://thatsthefont.tumblr.com/" className="social-link-text">
						<i className="fab fa-tumblr fa-fw fa-lg social-link-icon" title="Tumblr"></i>
						thatsthefont.tumblr.com
					</a>
				</div>
			</div>
		</Fragment>
	)
}