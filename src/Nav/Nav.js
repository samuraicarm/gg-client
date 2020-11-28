import React from "react";
import "./App.css";
import { Link, withRouter } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };

  return (
    <nav>
      <h3> Logo </h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/games">
          <li> Games </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
