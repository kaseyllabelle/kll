import React from 'react';

export default function Footer(props)
{
	return(
		<footer className="full-width-container footer">
			<div className="row">
				<div className="col col-12">
					<div className="footer-links">
						<a href="https://goo.gl/forms/fcvTryc6Pryrxjfj2" target="_blank" rel="noopener noreferrer" className="google-form">
							<i className="fab fa-google fa-fw fa-lg" aria-hidden="true"></i>
							<span className="sr-only">Contact Form</span>
						</a>
						<a href="https://www.linkedin.com/in/kaseyllabelle" target="_blank" rel="noopener noreferrer" className="linkedin">
							<i className="fab fa-linkedin-in fa-fw fa-lg" aria-hidden="true"></i>
							<span className="sr-only">LinkedIn</span>
						</a>
						<a href="https://github.com/kaseyllabelle" target="_blank" rel="noopener noreferrer" className="github">
							<i className="fab fa-github fa-fw fa-lg" aria-hidden="true"></i>
							<span className="sr-only">GitHub</span>
						</a>
						<a href="https://twitter.com/kaseyllabelle" target="_blank" rel="noopener noreferrer" className="twitter">
							<i className="fab fa-twitter fa-fw fa-lg" aria-hidden="true"></i>
							<span className="sr-only">Twitter</span>
						</a>
						<a href="http://thatsthefont.tumblr.com/" target="_blank" rel="noopener noreferrer" className="tumblr">
							<i className="fab fa-tumblr fa-fw fa-lg" aria-hidden="true"></i>
							<span className="sr-only">Tumblr</span>
						</a>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col col-12">
					<small className="text-extra-small"><i className="far fa-copyright fa-sm" title="copyright"></i> {(new Date().getFullYear())} Kasey L. Labelle</small>
				</div>
			</div>
		</footer>
	)
}