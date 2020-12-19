import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import GameList from "./GameList";

import { games } from "../games";

export const Played = () => {
  return (
    <>
      <div className="container">
        <div className="played">
          <h1>Your Played List</h1>
          {games.map((game) => (
            <div key={game.id} className="item">
              <div className="card">
                <GameList key={game.id} {...game}></GameList>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
