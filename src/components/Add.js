import React, { Component } from "react";
import GameContext from "../context/GameContext";
import { data } from "../data.js";
import Game from "./Game";

class Add extends Component {
  static contextType = GameContext;

  state = {
    error: null,
  };

  render() {
    const searchGamesList = data || {};

    return (
      <div>
        <form className="search">
          <input value="" type="text" />
          <input type="submit" value="Search" />
        </form>
        <div className="gamelist">
          {searchGamesList.map((game) => (
            <li>
              <Game
                name={game.name}
                img={game.img}
                status={game.status}
                platform={game.platform}
                key={game.id}
              />
              <div className="button">
                <button type="button">Add to Play List</button>
              </div>
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default Add;
