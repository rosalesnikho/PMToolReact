import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

//UI Kit Styles
import 'uikit/dist/css/uikit.css'


//Import Components
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AddProject from "./components/Project/AddProject";

function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <Route exact path="/dashboard" component={Dashboard}/>
              <Route exact path="/addProject" component={AddProject}/>
              <Footer />
          </div>
      </Router>
  );
}

export default App;
