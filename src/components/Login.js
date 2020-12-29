import React from "react";
import { Link } from "react-router-dom";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  submitForm = (e) => {
    e.preventDefault();
    let userName = e.target.username.value;
    let password = e.target.password.value;
    this.props.loginUser(userName, password);
    alert(userName);
  };

  render() {
    return (
      <div classname="container">
        <div className="login">
          <form>
            <p>
              <input
                type="username."
                name="username"
                placeholder="Username"
                aria-label="username"
              />
            </p>
            <p>
              <input
                type="password"
                name="password"
                placeholder="Password"
                aria-label="password"
              />
            </p>
            <p>
              <input
                type="submit"
                name="submit"
                value="Login"
                aria-label="Login Button"
              />
            </p>
          </form>
        </div>
        <p>
          Don't have a Good Games account?
          <Link to="/signup">sign up here.</Link>
        </p>
      </div>
    );
  }
}
