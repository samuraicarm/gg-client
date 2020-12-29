import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="landingpage">
          <section className="intro box1">
            <h1> This is good games</h1>
            <p>All your games in one place.</p>
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </section>
          <section className="intro box3">
            <h2> Browse thousands of games</h2>
            <p>
              No matter the console or game you can find it here and add to your
              play list.{" "}
            </p>
          </section>
          <section className="intro box2">
            <h2> Keep track of the games you play and want to play</h2>
            <p>
              Don't keep release dates in your head. Add your games here so you
              know what's next on your list.
            </p>
          </section>

          <section className="intro box4">
            <h2>Save games you want to play later</h2>
            <p>Don't forget what's next to play alone or with friends.</p>
          </section>
        </div>
      </div>
    );
  }
}

export default LandingPage;
