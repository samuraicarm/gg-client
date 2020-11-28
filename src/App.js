import React, { Component } from "react";
import "./App.css";
import Header from "./Header/Header.js";
import LandingPage from "./LandingPage.LandingPage.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LandingPage />
      </div>
    );
  }
}

export default App;
