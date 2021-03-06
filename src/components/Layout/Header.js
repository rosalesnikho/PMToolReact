import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


let navStyle = {
	position: 'relative',
	zIndex: 980
};

class Header extends Component {
	render() {
		return (
			<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
				<nav className="uk-navbar-container" uk-navbar="true" style={navStyle}>
					<div className="uk-container">
						<div className="uk-navbar-left">
							<ul className="uk-navbar-nav">
								<li className="uk-active"><NavLink to="/dashboard">Dashboard</NavLink></li>
								<li>
									<a href="#">Parent</a>
									<div className="uk-navbar-dropdown">
										<ul className="uk-nav uk-navbar-dropdown-nav">
											<li className="uk-active"><NavLink to="#">Active</NavLink></li>
											<li><NavLink to="#">Item</NavLink></li>
											<li><NavLink to="#">Item</NavLink></li>
										</ul>
									</div>
								</li>
								<li><a href="#">Item</a></li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Header;