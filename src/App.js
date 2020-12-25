import React from "react";

import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";

import { Route, Switch } from "react-router-dom";

import PlayList from "./components/PlayList";
import { Played } from "./components/Played.js";
import Add from "./components/Add.js";
import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <GameProvider>
      <div class="container">
        <div className="App">
          <Nav />
          <main>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/played" component={Played} />
              <Route path="/add" component={Add} />
              <Route path="/playlist" component={PlayList} />
            </Switch>
          </main>
        </div>
      </div>
    </GameProvider>
  );
}

export default App;
