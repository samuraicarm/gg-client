import React from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";
/*import { API_ENDPOINT } from "../config";*/

export default class App extends React.Component {
  state = {
    error: null,
  };

  handlelogin = (e) => {
    e.preventDefault();
    const { username, userPassword } = e.target;
    this.setState({ error: null });
    const user = {
      username: username.value,
      userPassword: userPassword.value,
    };
    AuthApiService.loginUser(user)
      .then((loginResponse) => {
        TokenService.saveAuthToken(loginResponse.authToken);
        this.props.history.push("/playlist");
      })
      .catch((res) => this.setState({ eror: res.error }));
  };

  render() {
    return (
      <div classname="container">
        <div className="login">
          <form
            className="form"
            aria-label="login-form"
            onSubmit={this.handlelogin}
          >
            {this.state.error && <p className="error">{this.state.error}</p>}
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
                name="userPassword"
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
