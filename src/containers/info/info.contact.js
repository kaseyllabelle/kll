import React, {Fragment} from 'react';

// TODO:
// DRY code

export default function Contact(props)
{
	return(
		<Fragment>
			<p className="paragraph">If you’d like to learn more about me and my work, chat about an opportunity to work together, or swap puppy pics, get in&nbsp;touch!</p>
			<div className="social-links">
				<p className="paragraph google-form">
					<a href="https://goo.gl/forms/fcvTryc6Pryrxjfj2" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-google fa-fw fa-lg" aria-hidden="true"></i>
						<span className="sr-only">Contact Form</span>
						<span aria-hidden="true">contact form</span>
					</a>
				</p>
				<p className="paragraph linkedin">
					<a href="https://www.linkedin.com/in/kaseyllabelle" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-linkedin-in fa-fw fa-lg" aria-hidden="true"></i>
						<span className="sr-only">LinkedIn</span>
						<span aria-hidden="true">linkedin.com/in/kaseyllabelle</span>
					</a>
				</p>
				<p className="paragraph github">
					<a href="https://github.com/kaseyllabelle" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github fa-fw fa-lg" aria-hidden="true"></i>
						<span className="sr-only">GitHub</span>
						<span aria-hidden="true">github.com/kaseyllabelle</span>
					</a>
				</p>
				<p className="paragraph twitter">
					<a href="https://twitter.com/kaseyllabelle" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-twitter fa-fw fa-lg" aria-hidden="true"></i>
						<span className="sr-only">Twitter</span>
						<span aria-hidden="true">twitter.com/kaseyllabelle</span>
					</a>
				</p>
				<p className="paragraph tumblr">
					<a href="http://thatsthefont.tumblr.com/" target="_blank" rel="noopener noreferrer">
						<i className="fab fa-tumblr fa-fw fa-lg" aria-hidden="true"></i>
						<span className="sr-only">Tumblr</span>
						<span aria-hidden="true">thatsthefont.tumblr.com</span>
					</a>
				</p>
			</div>
		</Fragment>
	)
}