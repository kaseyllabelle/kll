import React, { Fragment } from 'react';

import { contactData } from '../../data/contactData';

export default function Contact(props)
{
  const socialLinks = contactData.map(item => {
    return (
      // <p key={item.className} className={item.className}>
      <p key={item.className} className={`paragraph ${item.className}`}>
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <i className={item.icon} aria-hidden="true"></i>
          <span className="sr-only">{item.sr}</span>
          <span aria-hidden="true">{item.text}</span>
        </a>
      </p>
    )
  });

  return(
    <Fragment>
      <p className="paragraph">If you’d like to learn more about me and my work, chat about an opportunity to work together, or swap puppy pics, get in&nbsp;touch!</p>
      <div className="social-links">
        {socialLinks}
      </div>
    </Fragment>
  )
}