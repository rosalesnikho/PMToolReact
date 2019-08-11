import React, {Component} from 'react';


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
								<li className="uk-active"><a href="#">Active</a></li>
								<li>
									<a href="#">Parent</a>
									<div className="uk-navbar-dropdown">
										<ul className="uk-nav uk-navbar-dropdown-nav">
											<li className="uk-active"><a href="#">Active</a></li>
											<li><a href="#">Item</a></li>
											<li><a href="#">Item</a></li>
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