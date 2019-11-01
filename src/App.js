import React, { Component } from "react";

import "./App.scss";

import Navbar from "./components/Navbar";

import Header from "./components/header";

import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
      </React.Fragment>
    );
  }
}

export default App;