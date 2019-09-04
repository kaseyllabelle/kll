import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props)
{  
  const linkTo = `/project/${props.name.toLowerCase().replace(/\s/g, '-')}`;

  return(
    <div className="col col-3 col-s-4 col-xs-12">
      <Link to={linkTo} onClick={() => {props.onClickProp(props.name)}} className="card">
        <img src={props.featuredImage} alt={props.name} className="card-image"/>
        <p className="card-name">
          {props.name}
        </p>
      </Link>
    </div>
  )
}