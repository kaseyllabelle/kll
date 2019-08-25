import React from 'react';

// TODO:
// DRY code
// add active state
// maintain selected filter while navigating

export default function Filters(props)
{
	return(
		<div className="col">
			<button onClick={(e) => {props.filterProjectsProp("All")}} className="filter">All</button>
			<button onClick={(e) => {props.filterProjectsProp("Design")}} className="filter">Design</button>
			<button onClick={(e) => {props.filterProjectsProp("Development")}} className="filter">Development</button>
			<button onClick={(e) => {props.filterProjectsProp("Fine Art")}} className="filter">Fine Art</button>
		</div>
	)
}