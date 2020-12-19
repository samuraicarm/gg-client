import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import GameList from "./GameList";

import { games } from "../games";





export const Playlist = () => {

const UseStatePlaylist = () => {
  const [game, setGames] = React.useState(games);

  const removeItem = (id) => {
    let newGames = game.filter((game) => game.id !== id);
    setGames(newGames);
  };

  return (
    <>
      <div className="container">
        <div className="played">
          <h1>Your Play List</h1>
          {games.map((game) => (
            <div key={game.id} className="item">
              <div className="card">
                <GameList key={game.id} {game.status === "playing"}></GameList>
                <button onClick={() => removeItem(id)}>Delete </button>
              </div>
            </div>
          ))}
           <button className="btn" onClick={() => setGames([])}>
        clear items
      </button>
        </div>
      </div>
    </>
  );
};
