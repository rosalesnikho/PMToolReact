import React from 'react';
import {NavLink} from "react-router-dom";


const CreateProjectButton = (props) => {
	return (
		<React.Fragment>
			<NavLink to="/addProject" className=""> <span className="uk-icon-button uk-text-success" uk-icon="plus" uk-tooltip="title: Create a new project; pos: right"></span></NavLink>
			<br/>
		</React.Fragment>
	);
}

export default CreateProjectButton;