import React, {Fragment} from 'react';

export default function ProjectPageDescription(props)
{
	return(
		<Fragment>
			<h1 className="page-header">{props.nameProp}</h1>
			{props.description1Prop && <p className="body project-description">{props.description1Prop}</p>}
			{props.description2Prop && <p className="body project-description">{props.description2Prop}</p>}
			{props.description3Prop && <p className="body project-description">{props.description3Prop}</p>}
			{props.description4Prop && <p className="body project-description">{props.description4Prop}</p>}
			{props.description5Prop && <p className="body project-description">{props.description5Prop}</p>}
			{props.stackProp && <p className="body project-description-stack">{props.stackProp}</p>}
			{props.urlProp && <p className="body"><a href={props.urlProp} target="_blank" className="project-description-url primary">View Website</a></p>}
		</Fragment>
	)
}