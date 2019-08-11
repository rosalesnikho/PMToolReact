import React, {Component} from 'react';


//Components Import
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";

class Dashboard extends Component {
	render() {
		return (
			<div>
				<div className="uk-container">
					<br/>
					<CreateProjectButton />
					<br/>
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