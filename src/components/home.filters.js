import React from 'react';

export default function Filters(props)
{
	return(
		<div className="col" data-active-filter={props.currentFilterProp}>
			<button onClick={(e) => {props.filterProjectsProp("All")}} data-filter="All" className="filter">All</button>
			<button onClick={(e) => {props.filterProjectsProp("Design")}} data-filter="Design" className="filter">Design</button>
			<button onClick={(e) => {props.filterProjectsProp("Development")}} data-filter="Development" className="filter">Development</button>
			<button onClick={(e) => {props.filterProjectsProp("Fine Art")}} data-filter="Fine Art" className="filter">Fine Art</button>
		</div>
	)
}