import React, { Component } from "react";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import Nav from "./Nav/Nav";

import { Route, Switch } from "react-router-dom";

import { Playlist } from "./Playlist.js";
import { Played } from "./Played.js";
import { Add } from "./Add.js";

function App() {
  return (
    <div class="container">
      <div className="App">
        <Nav />
        <main>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/played" component={Played} />
            <Route path="/add" component={Add} />
            <Route path="/playlist" component={Playlist} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
