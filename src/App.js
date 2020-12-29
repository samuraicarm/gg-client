import React, { Component } from "react";

import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import Login from "./components/Login";

import { Route, Switch } from "react-router-dom";

import PlayList from "./components/PlayList";
import Played from "./components/Played.js";
import Add from "./components/Add.js";
import SignUp from "./components/SignUp";
import GameContext from "./context/GameContext";

import { gamesdata } from "./gamesdata";

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: gamesdata,
      error: null,
      user: null,
      tags: [],
      favorite: false,
      played: true,
    };
  }

  setGames = (games) => {
    this.setState({
      games,
      error: null,
    });
  };

  addGame = (game) => {
    this.setState({
      games: [...this.state.games, game],
    });
  };

  deleteGame = (id) => {
    this.setState({
      games: this.state.games.filter((game) => game.id !== id),
    });
  };

  addtag = () => {
    this.setState({
      tags: [],
    });
  };

  favoriteGame = () => {
    this.setState({
      favorite: false,
    });
  };

  playedGame = () => {
    this.setState({
      played: true,
    });
  };

  loginUser = (email, password) => {
    this.setState({ user: { email, password } });
  };

  render() {
    const contextValue = {
      games: this.state.games,
      addGame: this.addGame,
      deleteGame: this.deleteGame,
      addtag: this.addtag,
      favoriteGame: this.favoriteGame,
      playedGame: this.playedGame,
    };

    return (
      <GameContext.Provider value={contextValue}>
        <div class="container">
          <div className="App">
            <Nav />
            <div className="content" aria-live="polite"></div>
            <main>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/played" component={Played} />
                <Route path="/add" component={Add} />
                <Route
                  path="/playlist"
                  component={PlayList}
                  onFavoriteGame={this.favoriteGame}
                  onDeleteGame={this.deleteGame}
                  onPlayedGame={this.playedGame}
                />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
              </Switch>
            </main>
          </div>
        </div>
      </GameContext.Provider>
    );
  }
}

export default App;
