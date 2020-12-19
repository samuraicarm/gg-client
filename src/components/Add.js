import React from "react";
import { games } from "../games";
import GameList from "./GameList";

const Add = () => {
  return (
    <div className="container">
      <div className="add-content">
        <h1> Search for a Game</h1>
        <div className="input-wrapper">
          <input type="text" placeholder="Search for a Game" />

          <section className="gamelist">
            {games.map((game, index) => {
              return (
                <div className="card">
                  <GameList key={game.id} {...game}></GameList>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Add;
