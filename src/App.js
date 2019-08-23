import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

//UI Kit Styles and other styles
import "uikit/dist/css/uikit.css"
import "./App.css";


//Import Components
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AddProject from "./components/Project/AddProject";
import UpdateProject from "./components/Project/UpdateProject";

function App() {
	return (

		<Provider store={store}>
			<Router>
				<div className="App">
					<Header />
					<Route exact path="/dashboard" component={Dashboard}/>
					<Route exact path="/addProject" component={AddProject}/>
					<Route exact path="/updateProject/:id" component={UpdateProject}/>
					<Footer />
				</div>
			</Router>
		</Provider>

	);
}

export default App;
