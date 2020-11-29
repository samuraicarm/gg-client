import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <h3>
          <Link to="/">Logo</Link>
        </h3>
        <ul className="nav-links">
          <li> Search Games </li>
        </ul>
        <ul className="nav-links">
          <Link to="/SearchMyGames">My Games</Link>
        </ul>

        <ul className="nav-links">
          <Link to="/Login">Login</Link>
        </ul>

        <ul className="nav-links">
          <Link to="/SignUp">Sign Up</Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
