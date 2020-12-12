import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="landingpage">
          <section className="intro box1">
            <h1> This is good games</h1>
          </section>
          <section className="intro box2">
            <h2> Keep track of the games you play</h2>
          </section>
          <section className="intro box3">
            <h2> Browse thousands of games</h2>
          </section>
          <section className="intro box4">
            <h2>Save games you want to play later</h2>
          </section>
        </div>
      </div>
    );
  }
}

export default LandingPage;
