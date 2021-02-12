import React, { Component } from "react";
import { GameCard } from "./GameCard.js";
import GameContext from "../context/GameContext";

class PlayList extends Component {
  static contextType = GameContext;

  state = {
    games: [],
  };

  render() {
    const { games } = this.context;

    const playlistGames = games.filter((games) => games.playlist === true) || {
      games: "",
    };
    return (
      <div>
        <div className="info">
          <h2> Your Play List</h2>
          <div className="count">
            {" "}
            {playlistGames.length}{" "}
            {playlistGames.length === 1 ? "Game" : "Games"}{" "}
          </div>
          {playlistGames.length > 0 ? (
            <div className="gamelist">
              {playlistGames.map((game) => (
                <li key={game.id}>
                  <GameCard
                    game={game}
                    match={{ params: { gameid: game.id } }}
                    onDelete={this.context.deleteGame}
                  />
                </li>
              ))}
            </div>
          ) : (
            <h2> No games on your list </h2>
          )}
        </div>
      </div>
    );
  }
}
export default PlayList;
