import React from 'react';

export default function Footer(props)
{
	return(
		<footer className="grid-container footer">
			<div className="row">
				<div className="col col-12">
					<div className="footer-links">
						<a href="mailto:kll.design.dev@gmail.com" className="email">
							<i className="fas fa-envelope fa-fw fa-lg footer-link-icon" title="Email"></i>
						</a>
						<a href="https://goo.gl/forms/fcvTryc6Pryrxjfj2" className="google-form">
							<i className="fab fa-google fa-fw fa-lg footer-link-icon" title="Form"></i>
						</a>
						<a href="https://www.linkedin.com/in/kaseyllabelle" className="linkedin">
							<i className="fab fa-linkedin-in fa-fw fa-lg footer-link-icon" title="LinkedIn"></i>
						</a>
						<a href="https://github.com/kaseyllabelle" className="github">
							<i className="fab fa-github fa-fw fa-lg footer-link-icon" title="GitHub"></i>
						</a>
						<a href="https://twitter.com/kaseyllabelle" className="twitter">
							<i className="fab fa-twitter fa-fw fa-lg footer-link-icon" title="Twitter"></i>
						</a>
						<a href="http://thatsthefont.tumblr.com/" className="tumblr">
							<i className="fab fa-tumblr fa-fw fa-lg footer-link-icon" title="Tumblr"></i>
						</a>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col col-12">
					<p className="copyright"><i className="far fa-copyright fa-sm" title="copyright"></i> {(new Date().getFullYear())} Kasey L. Labelle</p>
				</div>
			</div>
		</footer>
	)
}