import React, {Fragment} from 'react';

// TODO:
// DRY code

export default function ProjectPageDescription(props)
{
	return(
		<Fragment>
			<h1 className="h1">{props.nameProp}</h1>
			{props.description1Prop && <p className="paragraph">{props.description1Prop}</p>}
			{props.description2Prop && <p className="paragraph">{props.description2Prop}</p>}
			{props.description3Prop && <p className="paragraph">{props.description3Prop}</p>}
			{props.description4Prop && <p className="paragraph">{props.description4Prop}</p>}
			{props.description5Prop && <p className="paragraph">{props.description5Prop}</p>}
			{props.stackProp && <p className="text-small">{props.stackProp}</p>}
			{props.urlProp && <p className="text-small"><a href={props.urlProp} target="_blank" className="primary">View Website</a></p>}
		</Fragment>
	)
}