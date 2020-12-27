import React from "react";

const Game = ({ name, status, platform, img }) => {
  return (
    <div className="game">
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <p>{status}</p>
      <p>{platform}</p>
    </div>
  );
};

export default Game;
