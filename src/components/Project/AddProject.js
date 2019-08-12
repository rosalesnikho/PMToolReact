import React, {Component} from "react";
import { connect } from "react-redux"
import PropTypes from "prop-types";
import classnames from "classnames";


//Comps Import
import { createProject } from "../../actions/projectActions";

class AddProject extends Component {

	//Initial Comp State
	constructor() {
		super();
		this.state = {
			projectName: "",
			projectIdentifier: "",
			description: "",
			start_date: "",
			end_date: "",
			errors: {}
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	// Life Cycle Hook
	// Receive errors from state in case errors are made
	componentWillReceiveProps(nextProps, nextContext) {
		if(nextProps.errors) {
			this.setState(
				{errors : nextProps.errors}
				)
		}
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

		const { errors } = this.state;
		console.log(errors.projectName);


		return (
			<div className="uk-container">
				<div className="uk-grid">
					<div className="uk-width-1-2">
						<form onSubmit={this.onSubmit}>
							<fieldset className="uk-fieldset">
								<legend className="uk-legend">Create A New Project</legend>

								<div className="uk-margin">
									Project Name
									<input
										className={classnames("uk-input", {"uk-form-danger" : errors.projectName})}
										type="text"
										name="projectName"
										placeholder="Project Name"
										value={this.state.projectName}
										onChange={this.onChange}
									/>
									<span className="uk-text-danger uk-text-small">{errors.projectName}</span>
								</div>

								<div className="uk-margin">
									Project ID
									<input
										className={classnames("uk-input", {"uk-form-danger" : errors.projectIdentifier})}
										type="text"
										name="projectIdentifier"
										placeholder="Unique Project ID and more than 4 characters"
										value={this.state.projectIdentifier}
										onChange={this.onChange}
									/>
									<span className="uk-text-danger uk-text-small">{errors.projectIdentifier}</span>
								</div>

								<div className="uk-margin">
									Description
									<textarea
										className={classnames("uk-textarea", {"uk-form-danger" : errors.description})}
										rows="5"
										name="description"
										placeholder="Enter Project Details"
										value={this.state.description}
										onChange={this.onChange}
									/>
									<span className="uk-text-danger uk-text-small">{errors.description}</span>
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
//
AddProject.propTypes =  {
	createProject : PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
};

// Map error state to props by grabbing it from Redux State
// Pass errors as an Object and pass it to the view as new props
const mapStateToProp  =  state => ({
	errors: state.errors
});

// Export AddProject class
export default connect(
	mapStateToProp,
	{ createProject }
	)(AddProject);