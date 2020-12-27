import React, { Component } from "react";
import Game from "./Game";
import GameContext from "../context/GameContext";

class PlayList extends Component {
  static defaultProps = {
    games: [],
  };

  static contextType = GameContext;

  render() {
    const { games, deleteGame } = this.context;
    const playlistGame = "";
    return (
      <div>
        <div className="info">
          <h2> Your Play List</h2>
          <div className="count">
            {" "}
            {playlistGame.length} {playlistGame.length === 1 ? "Game" : "Games"}{" "}
          </div>
          <div className="gamelist">
            {games
              .filter((games) => games.status === "Play List")
              .map((playlistGame) => (
                <li>
                  <Game
                    name={playlistGame.name}
                    img={playlistGame.img}
                    status={playlistGame.status}
                    platform={playlistGame.platform}
                    key={playlistGame.id}
                  />
                  <button onClick={() => deleteGame(playlistGame.id)}>
                    Remove
                  </button>
                </li>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
export default PlayList;
