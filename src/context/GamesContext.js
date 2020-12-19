import React from "react";

//intial state

const GamesContext = React.createContext({
  played: [],
  playlist: () => {},
  deleteGame: () => {},
});

export default GamesContext;
