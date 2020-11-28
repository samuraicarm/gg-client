import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <h3> Logo </h3>
        <ul className="nav-links">
          <Link style={navStyle} to="/Games">
            <li> Search Games </li>
          </Link>
        </ul>
        <ul className="nav-links">
          <Link style={navStyle} to="/Profile">
            <li> My Games</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;
