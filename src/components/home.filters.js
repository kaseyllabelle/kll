import React from 'react';

export default function Filters(props)
{
  const filtersArray = ['All', 'Design', 'Development', 'Fine Art'];
  const filters = filtersArray.map((item) => {
    return (
      <button key={btoa (item)} onClick={(e) => {props.filterProjectsProp(item)}} data-filter={item} className="filter">
        {item}
      </button>
    )
  });

  return(
    <div className="col" data-active-filter={props.currentFilterProp}>
      {filters}
    </div>
  )
}