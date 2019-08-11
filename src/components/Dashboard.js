import React, {Component} from 'react';
import ProjectItem from "./Project/ProjectItem";


//Components Import


class Dashboard extends Component {
	render() {
		return (
			<div>
				<div className="uk-container">
					<h1>Dashboard component </h1>
					<ProjectItem />
				</div>

			</div>
		);
	}
}

export default Dashboard;