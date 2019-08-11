import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

//UI Kit Styles
import 'uikit/dist/css/uikit.css'


//Import Components
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
      <Route>
          <div className="App">
              <Header />
              <Dashboard />
              <Footer />
          </div>
      </Route>
  );
}

export default App;
