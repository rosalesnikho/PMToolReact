import React, {Component} from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";
import {connect} from "react-redux";

// Comps Import
import {getOneProject} from "../../actions/projectActions";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";



class UpdateProject extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.getOneProject(id, this.props.history);
	}

	render() {
		return (
			// Start of Form
			<div className="uk-container">
				<div className="uk-grid">
					<div className="uk-width-1-2">
						<form onSubmit={this.onSubmit}>
							<fieldset className="uk-fieldset">
								<legend className="uk-legend">Updated Project: {project.projectName}</legend>

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
	project: PropTypes.object.isRequired
};

const mapStateToProps  =  state => ({
	project: state.project.project
});


export default connect(
	null,
	 {getOneProject }
	 )(UpdateProject);