import React from 'react';
import './App.css';

//UI Kit Styles
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/js/uikit.min.js'

//Import Components
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
