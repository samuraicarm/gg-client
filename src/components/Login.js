import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div className="login">
        <form>
          <label for="fname">Username:</label>
          <br />
          <input type="text" id="username" name="username" />
          <br />
          <label for="lname">Password:</label>
          <br />
          <input type="text" id="password" name="password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
