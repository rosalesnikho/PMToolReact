import React, {Component} from 'react';

class ProjectItem extends Component {
	render() {
		return (
			<div>
				<p className="uk-text-lead">Project Item</p>
				<p>Project Info</p>
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