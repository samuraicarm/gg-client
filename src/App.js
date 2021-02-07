import React, { Component } from "react";

import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import Login from "./components/Login";

import { Route, Switch } from "react-router-dom";

import PlayList from "./components/Playlist";
import Played from "./components/Played.js";
import Add from "./components/Add.js";
import SignUp from "./components/SignUp";
import GameContext from "./context/GameContext";

//import { gamesdata } from "./gamesdata";

import { API_ENDPOINT, API_KEY } from "./config";

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [],
      error: null,
    };
  }

  setGames = (games) => {
    console.log({ games });
    this.setState({
      games,
      error: null,
    });
  };

  addGame = (newGame) => {
    const payload = {
      game_id: newGame.id,
      game_name: newGame.name,
      image_id: newGame.cover.image_id,
      playlist: true,
      played: false,
      favorite: false,
      userid: 1,
    };

    fetch(`${API_ENDPOINT}/api/list`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((returnedGame) => {
        this.setState((prevState) => ({
          games: [...prevState.games, returnedGame],
        }));
      });
  };

  deleteGame = (game_id) => {
    const payload = {
      game_id: game_id,
    };

    fetch(`${API_ENDPOINT}/api/list`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then(() => {
        this.setState((prevState) => ({
          games: [...prevState.games],
        }));
      });
  };

  loadGames() {
    fetch(`${API_ENDPOINT}/api/list`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setGames)

      .catch((error) => this.setState({ error }));
  }

  componentDidMount() {
    this.loadGames();
  }

  render() {
    return (
      <GameContext.Provider
        value={{
          ...this.state,
          addGame: this.addGame.bind(this),
          deleteGame: this.deleteGame.bind(this),
        }}
      >
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
