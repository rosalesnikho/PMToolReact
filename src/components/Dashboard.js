import React, {Component} from 'react';
import ProjectItem from "./Project/ProjectItem";

//Components Import


class Dashboard extends Component {
	render() {
		return (
			<div>
				<div className="uk-container">
					<div className="uk-text-center" uk-grid="true">
						<div className="uk-width-1-4">
							<div className="uk-card uk-card-default uk-card-body">
								<ProjectItem />
							</div>
						</div>

						<div className="uk-width-1-4">
							<div className="uk-card uk-card-default uk-card-body">
								<ProjectItem />
							</div>
						</div>

						<div className="uk-width-1-4">
							<div className="uk-card uk-card-default uk-card-body">
								<ProjectItem />
							</div>
						</div>

						<div className="uk-width-1-4">
							<div className="uk-card uk-card-default uk-card-body">
								<ProjectItem />
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default Dashboard;