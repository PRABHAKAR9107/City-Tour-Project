import React, { Component } from "react";

import "./App.scss";

import "@fortawesome/fontawesome-free/css/all.min.css";

import Navbar from "./components/Navbar/Navbar";

import Tourlist from "./components/Tourlist";

import Footer from "./components/footer/footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Tourlist />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
