import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul className="navlinks">
          <li className="logo">
            <Link to="/">Good Games</Link>
          </li>

          <li className="item">
            <Link to="/playlist">Play List</Link>
          </li>

          <li className="item">
            <Link to="/played">Played</Link>
          </li>

          <li className="item">
            <Link to="/add" classname="btn">
              Add
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
