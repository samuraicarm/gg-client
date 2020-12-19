import React from "react";

import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";

import { Route, Switch } from "react-router-dom";

import { Playlist } from "./components/Playlist.js";
import { Played } from "./components/Played.js";
import Add from "./components/Add.js";

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
