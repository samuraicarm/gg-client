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
    const playedGames = games.filter((games) => games.status === "Played");
    return (
      <div>
        <div className="info">
          <h2> Your Played List</h2>
          <div className="count">
            {" "}
            {playedGames.length} {playedGames.length === 1 ? "Game" : "Games"}{" "}
          </div>
          {playedGames.length > 0 ? (
            <div className="gamelist">
              {playedGames.map((game) => (
                <li>
                  <Game
                    name={game.name}
                    img={game.img}
                    status={game.status}
                    platform={game.platform}
                    key={game.id}
                    onDeleteGame={this.context.onDeleteGame}
                    onFavoriteGame={this.context.onFavoriteGame}
                    onPlayedGame={this.context.onPlayedGame}
                  />
                </li>
              ))}
            </div>
          ) : (
            <h2>No played games.</h2>
          )}
        </div>
      </div>
    );
  }
}
export default Played;
