import React, {Fragment} from 'react';

import Bio from '../../containers/info/info.bio';
import Contact from '../../containers/info/info.contact';

export default function Info(props)
{
	return(
		<Fragment>
			<main id="mainContent" className="grid-container">
				<div className="row">
					<div className="col col-5 col-s-5 col-xs-12 hidden-xs">
						<img src="/images/kasey.jpg" className="photo" alt="Kasey"/>
					</div>
					<div className="col col-7 col-s-7 col-xs-12">
						<Bio/>
						<Contact/>
					</div>
				</div>
			</main>
		</Fragment>
	)
}