import React from "react";

const GameContext = React.createContext({
  games: [],
  addGame: () => {},
  deleteGame: () => {},
});

export default GameContext;
