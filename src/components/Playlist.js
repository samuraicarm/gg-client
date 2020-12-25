import React, { useState, useContext } from "react";
import Game from "./Game";
import { GameContext } from "../context/GameContext";

const PlayList = () => {
  const [games, setGames] = useContext(GameContext);

  return (
    <div>
      {games.map((game) => (
        <Game
          name={game.name}
          status={game.status}
          platform={game.platform}
          key={game.id}
        />
      ))}
    </div>
  );
};

export default PlayList;
