import React from "react";
import Nav from "./src/Nav/Nav.js";
import Games from "./games/games";
import Profile from "./src/Profile/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Nav />
      <Switch>
        <Route path="/games" component={Games} />
        <Route path="/mygames" component={Profile} />
      </Switch>
    </header>
  );
};

export default Header;
