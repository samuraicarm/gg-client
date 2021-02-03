import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";

class Nav extends Component {
  logout = () => {
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };

  render() {
    return (
      <nav className="navbar" role="navigation">
        <section className="logo">
          <h1>G00d Games</h1>
        </section>
        <ul className="navlinks">
          {TokenService.hasAuthToken() ? (
            <>
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

              <li className="item">
                <button
                  className="nav-button"
                  aria-label="logout-button"
                  type="submit"
                  onClick={() => this.logout()}
                >
                  log out
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="logo">
                <Link to="/">Good Games</Link>
              </li>

              <li className="item">
                <Link to="/signup" classname="btn">
                  <button
                    className="nav-button"
                    aria-label="signup-button"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </Link>
              </li>

              <li className="item">
                <Link to="/login">
                  <button
                    className="nav-button"
                    aria-label="login-button"
                    type="submit"
                  >
                    login
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
}

export default Nav;
