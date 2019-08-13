import React, {Component} from "react";
import {connect} from "react-redux";
import {getProjects} from "../actions/projectActions";


//Components Import
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import PropTypes from "prop-types";

class Dashboard extends Component {

	componentDidMount() {
		this.props.getProjects();
	}

	render() {
		const { projects } = this.props.project;
		return (
			<div>
				<div className="uk-container">
					<br/>
					<CreateProjectButton/>
					<br/>
					<div className="uk-text-center" uk-grid="true">
						{projects.map(project => (
							<div className="uk-width-1-4">
								<div className="uk-card uk-card-default uk-card-body">
									<ProjectItem key={project.id} project={project}/>
								</div>
							</div>
						))
						}
					</div>
				</div>
			</div>
		);
	}
}

Dashboard.propType = {
	project: PropTypes.object.isRequired,
	getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	project: state.project,
});

export default connect(mapStateToProps, {getProjects})(Dashboard);