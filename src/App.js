import React, { Component } from "react";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import Nav from "./Nav/Nav";
import SearchMyGames from "./Profile/SearchMyGames";
import { Route, Switch } from "react-router-dom";
import SignUp from "./SignUp/SignUp.js";
import Login from "./Login/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/SearchMyGames" component={SearchMyGames} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
