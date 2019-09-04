import React, { Fragment } from 'react';

export default function ProjectPageDescription(props)
{
  const description = props.descriptionProp.map((item, index) => {
    return(
      <p key={btoa (index)} className="paragraph">
        {item}
      </p>
    )
  });

  return(
    <Fragment>
      <h1 className="h1">{props.nameProp}</h1>
      {description}
      {props.stackProp && <p className="text-small">{props.stackProp}</p>}
      {props.urlProp && <p className="text-small"><a href={props.urlProp} target="_blank" rel="noopener noreferrer" className="primary">View Website</a></p>}
    </Fragment>
  )
}