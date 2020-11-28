import React from "react";
import Nav from "./Nav/Nav.js";
import Games from "./Games/Games.js";
import Profile from "./Profile/Profile.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Nav />
      <Switch>
        <Route path="/games" component={Games} />
        <Route path="/myprofile" component={Profile} />
      </Switch>
    </header>
  );
};

export default Header;
