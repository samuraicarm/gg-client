import React, { Component } from "react";

class SignUp extends Component {
  render() {
    return (
      <div className="signup">
        <form>
          <label for="fname">First name:</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" /> <br />
          <label for="username">Username:</label>
          <br />
          <input type="text" id="username" name="username" />
          <br />
          <label for="password">Password:</label>
          <br />
          <input type="text" id="password" name="password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
