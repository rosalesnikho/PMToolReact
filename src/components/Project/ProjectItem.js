import React, {Component} from 'react';

class ProjectItem extends Component {
	render() {
		const { project } = this.props;
		return (
			<div>
				<p className="uk-text-small">{project.projectName}</p>
				<p className="uk-text-small">{project.description}</p>
				<ul className="uk-iconnav">
					<li><a href="#" uk-icon="icon: plus"></a></li>
					<li><a href="#" uk-icon="icon: file-edit"></a></li>
					<li><a href="#" uk-icon="icon: copy"></a></li>
					<li><a href="#" uk-icon="icon: trash"></a></li>
				</ul>
			</div>
		);
	}
}

export default ProjectItem;