import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class ProjectItem extends Component {
	render() {
		const { project } = this.props;
		return (
			<div>
				<p className="uk-text-small">{project.projectName}</p>
				<p className="uk-text-small">{project.description}</p>
				<ul className="uk-iconnav">
					<li><NavLink to={`/updateProject/${project.projectIdentifier}`} uk-icon="icon: file-edit" uk-tooltip="title: Edit project; pos: bottom"></NavLink></li>
					<li><a href="#" uk-icon="icon: copy" uk-tooltip="title: View project; pos: bottom"></a></li>
					<li><a href="#" uk-icon="icon: trash" uk-tooltip="title: Delete project; pos: bottom"></a></li>
				</ul>
			</div>
		);
	}
}

export default ProjectItem;