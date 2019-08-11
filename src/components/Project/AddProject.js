import React, {Component} from 'react';

class AddProject extends Component {

	render() {
		return (
			<div className="uk-container">
				<div className="uk-grid">
					<div className="uk-width-1-2">
						<form>
							<fieldset className="uk-fieldset">
								<legend className="uk-legend">Create A New Project</legend>

								<div className="uk-margin">
									<input className="uk-input" type="text" placeholder="Project Name" />
								</div>
								<div className="uk-margin">
									<input className="uk-input" type="text" placeholder="Unique Project ID" />
								</div>

								<div className="uk-margin">
									<select className="uk-select">
										<option>Option 01</option>
										<option>Option 02</option>
									</select>
								</div>

								<div className="uk-margin">
									<textarea className="uk-textarea" rows="5" placeholder="Enter Project Details"></textarea>
								</div>

								<div className="uk-margin">
									Start Date
									<input className="uk-input" type="date" />
								</div>

								<div className="uk-margin">
									End Date
									<input className="uk-input" type="date" />
								</div>

								<div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
									<label><input className="uk-radio" type="radio" name="radio2" checked /> A</label>
									<label><input className="uk-radio" type="radio" name="radio2" /> B</label>
								</div>

								<div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
									<label><input className="uk-checkbox" type="checkbox" checked /> A</label>
									<label><input className="uk-checkbox" type="checkbox" /> B</label>
								</div>

								<div className="uk-margin">
									<input className="uk-range" type="range" value="2" min="0" max="10" step="0.1" />
								</div>

							</fieldset>
						</form>
					</div>
					<div className="uk-width-1-2">

					</div>
				</div>
			</div>
		);
	}
}

export default AddProject;