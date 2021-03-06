import React, { Component } from "react";
import { GameCard } from "./GameCard.js";
import GameContext from "../context/GameContext";

class Played extends Component {
  static defaultProps = {
    games: [],
  };

  static contextType = GameContext;

  render() {
    const { games } = this.context;
    const playedGames = games.filter((games) => games.played === true);
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
                <li key={game.id}>
                  <GameCard game={game} onDelete={this.context.deleteGame} />
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
