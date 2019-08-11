import React from 'react';
import {NavLink} from "react-router-dom";


const CreateProjectButton = (props) => {
	return (
		<React.Fragment>
			<NavLink to="/addProject" className=""> <span uk-icon="plus" uk-tooltip="title: Create a new project; pos: right"></span></NavLink>
		</React.Fragment>
	);
}

export default CreateProjectButton;