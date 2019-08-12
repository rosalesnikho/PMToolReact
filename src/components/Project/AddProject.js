import React, {Component} from "react";
import { connect } from "react-redux"
import PropTypes from "prop-types";


//Comps Import
import { createProject } from "../../actions/projectActions";

class AddProject extends Component {

	//Comp State
	constructor() {
		super();
		this.state = {
			projectName: "",
			projectIdentifier: "",
			description: "",
			start_date: "",
			end_date: ""
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	// Allows input fields to be used again, after we set the state from the constructor
	// Instead of targeting individual forms, use 'e.target.name' to target fields agnostically
	onChange(e) {
		this.setState({[e.target.name]: e.target.value })
	}

	// Submit form information
	onSubmit(e) {
		e.preventDefault();
		const newProject = {
			projectName: this.state.projectName,
			projectIdentifier: this.state.projectIdentifier,
			description: this.state.description,
			start_date: this.state.start_date,
			end_date: this.state.end_date
		};

		this.props.createProject(newProject, this.props.history);

		console.log(newProject)
	}

	render() {
		return (
			<div className="uk-container">
				<div className="uk-grid">
					<div className="uk-width-1-2">
						<form onSubmit={this.onSubmit}>
							<fieldset className="uk-fieldset">
								<legend className="uk-legend">Create A New Project</legend>

								<div className="uk-margin">
									Project Title
									<input
										className="uk-input"
										type="text"
										name="projectName"
										placeholder="Project Name"
										value={this.state.projectName}
										onChange={this.onChange}
									/>
								</div>
								<div className="uk-margin">
									Project ID
									<input
										className="uk-input"
										type="text"
										name="projectIdentifier"
										placeholder="Unique Project ID"
										value={this.state.projectIdentifier}
										onChange={this.onChange}
									/>
								</div>

								<div className="uk-margin">
									Description
									<textarea
										className="uk-textarea"
										rows="5"
										name="description"
										placeholder="Enter Project Details"
										value={this.state.description}
										onChange={this.onChange}
									/>
								</div>

								<div className="uk-margin">
									Start Date
									<input
										className="uk-input"
										type="date"
										name="start_date"
										value={this.state.start_date}
										onChange={this.onChange}
									/>
								</div>

								<div className="uk-margin">
									End Date
									<input
										className="uk-input"
										type="date"
										name="end_date"
										value={this.state.end_date}
										onChange={this.onChange}
									/>
								</div>

							</fieldset>
							<p uk-margin="true">
								<button className="uk-button uk-button-default">Submit</button>
							</p>
						</form>
					</div>
					<div className="uk-width-1-2">
					{/*	 Right side - Add Instructional Content Here */}
					</div>
				</div>
			</div>
		);
	}
}

// Create Project Function is a required prop type
AddProject.propTypes =  {
	createProject : PropTypes.func.isRequired
};

// Export AddProject class
export default connect(
	null,
	{ createProject }
	)(AddProject);