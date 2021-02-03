import React, { Component } from "react";
import ValidationError from "./ValidationError.js";
import { Link } from "react-router-dom";
import authApiService from "../services/auth-api-service.js";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: "",
        touched: false,
      },
      userPassword: {
        value: "",
        touched: false,
      },
      repeatPassword: {
        value: "",
        touched: false,
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, userPassword, repeatPassword } = e.target;
    this.setState({ error: null });
    authApiService
      .postUser({
        username: username.value,
        userPassword: userPassword.value,
      })
      .then((user) => {
        this.props.history.push("/login");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
    console.log("Username: ", username.value);
    console.log("userPassword: ", userPassword.value);
    console.log("Repeat Password: ", repeatPassword.value);
  };

  updateUsername(username) {
    this.setState({ username: { value: username, touched: true } });
  }

  updateUserPassword(userPassword) {
    this.setState({
      userPassword: { value: userPassword, touched: true },
    });
  }

  updateRepeatPassword(repeatPassword) {
    this.setState({
      repeatPassword: {
        value: repeatPassword,
        touched: true,
      },
    });
  }

  validateUsername() {
    const username = this.state.username.value.trim();
    if (username.length === 0) {
      return "Username is required";
    } else if (username.length < 8) {
      return "Username must be at least 8 characters long";
    }
  }

  validateUserPassword() {
    const userPassword = this.state.userPassword.value.trim();
    if (userPassword.length === 0) {
      return "Password is required";
    } else if (userPassword.length < 6 || userPassword.length > 72) {
      return "Password must be between 6 and 72 characters long";
    } else if (!userPassword.match(/[0-9]/)) {
      return "Password must contain at least one number";
    }
  }

  validateRepeatPassword() {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const userPassword = this.state.userPassword.value.trim();

    if (repeatPassword !== userPassword) {
      return "Passwords do not match";
    }
  }

  render() {
    const usernameError = this.validateUsername();
    const passwordError = this.validateUserPassword();
    const repeatPasswordError = this.validateRepeatPassword();

    return (
      <div className="container">
        <form className="registration" onSubmit={this.handleSubmit}>
          <h2>Sign Up for Good Games</h2>
          <p>Use the form below to create an account to use Good Games</p>
          <div className="registration__hint">* required field</div>
          <div className="form-group">
            <label htmlFor="username">Username *</label>
            <input
              type="text"
              className="registration__control"
              id="username"
              name="username"
              onChange={(e) => this.updateUsername(e.target.value)}
            />
            {this.state.username.touched && (
              <ValidationError message={usernameError} />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="text"
              className="registration__control"
              id="userPassword"
              name="userPassword"
              onChange={(e) => this.updateUserPassword(e.target.value)}
            />
            <div className="registration__hint">
              6 to 72 characters, must include a number
            </div>
            {this.state.userPassword.touched && (
              <ValidationError message={passwordError} />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">Repeat Password *</label>
            <input
              type="password"
              className="registration__control"
              id="repeatPassword"
              name="repeatPassword"
              onChange={(e) => this.updateRepeatPassword(e.target.value)}
            />
            {this.state.repeatPassword.touched && (
              <ValidationError message={repeatPasswordError} />
            )}
          </div>

          <div className="registration__button__group">
            <button type="reset" className="registration__button">
              Cancel
            </button>
            <button
              type="submit"
              className="registration__button"
              disabled={
                this.validateUsername() ||
                this.validateUserPassword() ||
                this.validateRepeatPassword()
              }
            >
              SignUp
            </button>
          </div>
        </form>
        <p>
          Already have a Good Games account?
          <Link to="/login">Login here.</Link>
        </p>
      </div>
    );
  }
}
export default SignUp;
