import React, { Component } from "react";
import ValidationError from "./ValidationError.js";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: "",
        touched: false,
      },
      password: {
        value: "",
        touched: false,
      },
      repeatPassword: {
        value: "",
        touched: false,
      },
    };
  }

  updateUsername(username) {
    this.setState({ username: { value: username, touched: true } });
  }

  updatePassword(password) {
    this.setState({
      password: { value: password, touched: true },
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

  handleSubmit(event) {
    event.preventDefault();
    const { username, password, repeatPassword } = this.state;

    console.log("Username: ", username.value);
    console.log("Password: ", password.value);
    console.log("Repeat Password: ", repeatPassword.value);
  }

  validateUsername() {
    const username = this.state.username.value.trim();
    if (username.length === 0) {
      return "Username is required";
    } else if (username.length < 8) {
      return "Username must be at least 8 characters long";
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (password.length < 6 || password.length > 72) {
      return "Password must be between 6 and 72 characters long";
    } else if (!password.match(/[0-9]/)) {
      return "Password must contain at least one number";
    }
  }

  validateRepeatPassword() {
    const repeatPassword = this.state.repeatPassword.value.trim();
    const password = this.state.password.value.trim();

    if (repeatPassword !== password) {
      return "Passwords do not match";
    }
  }

  render() {
    const usernameError = this.validateUsername();
    const passwordError = this.validatePassword();
    const repeatPasswordError = this.validateRepeatPassword();

    return (
      <div className="container">
        <form
          classUsername="registration"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <h2>Sign Up for Good Games</h2>
          <p>Use the form below to create an account to use Good Games</p>
          <div classUsername="registration__hint">* required field</div>
          <div classUsername="form-group">
            <label htmlFor="username">Username *</label>
            <input
              type="text"
              classUsername="registration__control"
              username="username"
              id="username"
              onChange={(e) => this.updateUsername(e.target.value)}
            />
            {this.state.username.touched && (
              <ValidationError message={usernameError} />
            )}
          </div>
          <div classUsername="form-group">
            <label htmlFor="password">Password *</label>
            <input
              type="password"
              classUsername="registration__control"
              username="password"
              id="password"
              onChange={(e) => this.updatePassword(e.target.value)}
            />
            <div classUsername="registration__hint">
              6 to 72 characters, must include a number
            </div>
            {this.state.password.touched && (
              <ValidationError message={passwordError} />
            )}
          </div>
          <div classUsername="form-group">
            <label htmlFor="repeatPassword">Repeat Password *</label>
            <input
              type="password"
              classUsername="registration__control"
              username="repeatPassword"
              id="repeatPassword"
              onChange={(e) => this.updateRepeatPassword(e.target.value)}
            />
            {this.state.repeatPassword.touched && (
              <ValidationError message={repeatPasswordError} />
            )}
          </div>

          <div classUsername="registration__button__group">
            <button type="reset" classUsername="registration__button">
              Cancel
            </button>
            <button
              type="submit"
              classUsername="registration__button"
              disabled={
                this.validateUsername() ||
                this.validatePassword() ||
                this.validateRepeatPassword()
              }
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
