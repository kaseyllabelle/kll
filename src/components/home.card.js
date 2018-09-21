import React from 'react';

export default function Card(props)
{
	return(
		<div className="col col-3 col-s-4 col-xs-12">
			<div className="card" onClick={() => {props.onClickProp(props.name)}}>
				<img className="card-image" src={props.featuredImage} alt="placeholder card"/>
				<div className="card-overlay">
					<p className="card-name">{props.name}</p>
				</div>
			</div>
		</div>
	)
}