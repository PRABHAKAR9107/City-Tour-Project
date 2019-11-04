import React, { Component } from "react";

import "./App.scss";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/Navbar/Navbar";

import Tourlist from "./components/Tourlist";

import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Tourlist />
      </React.Fragment>
    );
  }
}

export default App;
