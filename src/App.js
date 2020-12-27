import React, { Component } from "react";

import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";

import { Route, Switch } from "react-router-dom";

import PlayList from "./components/PlayList";
import Played from "./components/Played.js";
import Add from "./components/Add.js";
import SignUp from "./components/SignUp";
import GameContext from "./context/GameContext";

import { gamesdata } from "./gamesdata";

class App extends Component {
  state = {
    games: [
      {
        id: 1,
        name: "Among Trees",
        status: "Play List",
        img: "https://dummyimage.com/300",
        platform: "PC",
      },

      {
        id: 2,
        name: "What Remains of Edith Finch",
        status: "Played",
        img: "https://dummyimage.com/300",
        platform: "Switch",
      },

      {
        id: 3,
        name: "Zelda: Breath of the Wild",
        status: "Played",
        img: "https://dummyimage.com/300",
        platform: "Switch",
      },
      {
        id: 4,
        name: "The Gardens Between",
        status: "Played",
        img: "https://dummyimage.com/300",
        platform: "iPhone",
      },

      {
        id: 5,
        name: "The Last Campfire",
        status: "Play List",
        img: "https://dummyimage.com/300",
        platform: "Switch",
      },

      {
        id: 6,
        name: "CyberPunk2077",
        status: "Play List",
        img: "https://dummyimage.com/300",
        platform: "Xbox",
      },
      {
        id: 7,
        name: "Call of Duty: Black Ops Cold War",
        status: "Play List",
        img: "https://dummyimage.com/300",
        platform: "Playstation",
      },
    ],
    error: null,
  };

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

  handledeleteGame = (gameId) => {
    this.setState({
      games: this.state.games.filter((game) => game.id !== gameId),
    });
  };

  render() {
    const contextValue = {
      games: this.state.games,
      addGame: this.state.addGame,
      deleteGame: this.handleDeleteGame,
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
                <Route path="/playlist" component={PlayList} />
                <Route path="/signup" component={SignUp} />
              </Switch>
            </main>
          </div>
        </div>
      </GameContext.Provider>
    );
  }
}

export default App;
