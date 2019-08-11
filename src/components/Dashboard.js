import React, {Component} from 'react';
import ProjectItem from "./Project/ProjectItem";

//Components Import


class Dashboard extends Component {
	render() {
		return (
			<div>
				<h1 className="">Dashboard component</h1>
				<ProjectItem />
			</div>
		);
	}
}

export default Dashboard;