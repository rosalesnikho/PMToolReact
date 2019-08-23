import React, {Component} from "react";
import { connect } from "react-redux"
import PropTypes from "prop-types";
import classnames from "classnames";

// Comps Import
import { getOneProject, createProject } from "../../actions/projectActions";


class UpdateProject extends Component {
	// set state

	constructor() {
		super();

		this.state = {
			id: "",
			projectName: "",
			projectIdentifier: "",
			description: "",
			start_date: "",
			end_date: ""
		};
		this.onChange = this.onChange.bind(this);
	}

	componentWillReceiveProps(nextProps, nextContext) {
		const {
			id,
			projectName,
			projectIdentifier,
			description,
			start_date,
			end_date
		} = nextProps.project;

		this.setState({
			id,
			projectName,
			projectIdentifier,
			description,
			start_date,
			end_date
		})
	}

	componentDidMount() {
		const {id} = this.props.match.params;
		this.props.getOneProject(id, this.props.history);
	}

	onChange(e) {
		this.setState({[e.target.name]:e.target.value})
	}

	render() {
		return (
			// Start of Form
			<div className="uk-container">
				<div className="uk-grid">
					<div className="uk-width-1-2">
						<form onSubmit={this.onSubmit}>
							<fieldset className="uk-fieldset">
								<legend className="uk-legend">Updated Project: {this.state.projectName}</legend>

								<div className="uk-margin">
									Project Name
									<input
										className="disabled"
										type="text"
										name="projectName"
										placeholder="Project Name"
										value={this.state.projectName}
										onChange={this.onChange}
									/>
									{/*<span className="uk-text-danger uk-text-small">{errors.projectName}</span>*/}
								</div>

								<div className="uk-margin">
									Project ID
									<input
										// className={classnames("uk-input", {"uk-form-danger": errors.projectIdentifier})}
										type="text"
										name="projectIdentifier"
										placeholder="Unique Project ID and more than 4 characters"
										value={this.state.projectIdentifier}
										onChange={this.onChange}
									/>
									{/*<span className="uk-text-danger uk-text-small">{errors.projectIdentifier}</span>*/}
								</div>

								<div className="uk-margin">
									Description
									<textarea
										// className={classnames("uk-textarea", {"uk-form-danger": errors.description})}
										rows="5"
										name="description"
										placeholder="Enter Project Details"
										value={this.state.description}
										onChange={this.onChange}
									/>
									{/*<span className="uk-text-danger uk-text-small">{errors.description}</span>*/}
								</div>

								<div className="uk-margin">
									Start Date
									<input
										className="uk-input"
										type="date"
										name="start_date"
										value={this.state.start_date}
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
								<button className="uk-button uk-button-default">Save Changes</button>
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

UpdateProject.propTypes = {
	getOneProject: PropTypes.func.isRequired,
	createProject: PropTypes.func.isRequired,
	project: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	project: state.project.project
});



export default connect(
	mapStateToProps,
	{getOneProject, createProject}
)(UpdateProject);