import React from 'react';

import { contactData } from '../data/contactData';

export default function Footer(props)
{
  const socialIcons = contactData.map(item => {
    return (
      <a key={item.className} href={item.link} target="_blank" rel="noopener noreferrer" className={item.className}>
        <i className={item.icon} aria-hidden="true"></i>
        <span className="sr-only">{item.sr}</span>
      </a>
    )
  });

  return(
    <footer className="full-width-container footer">
      <div className="row">
        <div className="col col-12">
          <div className="footer-links">
            {socialIcons}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-12">
          <small className="text-extra-small">
            <i className="far fa-copyright fa-sm" title="copyright"></i> {(new Date().getFullYear())} Kasey L. Labelle
          </small>
        </div>
      </div>
    </footer>
  )
}