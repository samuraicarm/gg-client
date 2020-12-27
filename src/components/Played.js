import React, { Component } from "react";
import Game from "./Game";
import GameContext from "../context/GameContext";

class Played extends Component {
  static defaultProps = {
    games: [],
  };

  static contextType = GameContext;

  render() {
    const { games } = this.context;
    const playedGames = "";
    return (
      <div>
        <h2> Your Played List</h2>
        <div className="count">
          {" "}
          {playedGames.length} {playedGames.length === 1 ? "Game" : "Games"}{" "}
        </div>
        <div>
          <div className="gamelist">
            {games
              .filter((games) => games.status === "Played")
              .map((playedGames) => (
                <li>
                  <Game
                    name={playedGames.name}
                    img={playedGames.img}
                    status={playedGames.status}
                    platform={playedGames.platform}
                    key={playedGames.id}
                  />
                </li>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Played;
