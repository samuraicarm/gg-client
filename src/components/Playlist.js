import React, { Component } from "react";
import Game from "./Game";
import GameContext from "../context/GameContext";

class PlayList extends Component {
  static defaultProps = {
    games: [],
  };

  static contextType = GameContext;

  render() {
    const { games } = this.context;
    const { gameId } = this.props.match.params;
    const playlistGames = games.filter(
      (games) => games.status === "Play List",
      gameId
    ) || { games: "" };
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
                <li>
                  <Game
                    name={game.name}
                    img={game.img}
                    status={game.status}
                    platform={game.platform}
                    key={game.id}
                  />
                  <button>Remove</button>
                  <button>Mark As Played</button>
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
