import React from 'react';

// add active state + maintain filter selection between home -> project page -> home

export default function Filters(props)
{
	return(
		<div className="col filters">
			Filter: <a onClick={(e) => {props.filterProjectsProp("All")}} className="primary filter">All</a>
			<a onClick={(e) => {props.filterProjectsProp("Design")}} className="primary filter">Design</a>
			<a onClick={(e) => {props.filterProjectsProp("Development")}} className="primary filter">Development</a>
			<a onClick={(e) => {props.filterProjectsProp("Fine Art")}} className="primary filter">Fine Art</a>
		</div>
	)
}