import React from "react";

const Game = ({ name, status, platform }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{status}</p>
      <p>{platform}</p>
    </div>
  );
};

export default Game;
