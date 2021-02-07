import React from "react";
import GameContext from "../context/GameContext";

export const GameCard = ({ game, onDelete }) => {
  return (
    <GameContext.Consumer>
      {(context) => (
        <div className="result-card">
          <div className="cover-wrapper"></div>
          <img
            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.game_url}.jpeg`}
            alt={`${game.name} Cover`}
          />

          <div className="info">
            <div className="header">
              <h3 className="name">{game.name}</h3>
            </div>
            <div className="controls">
              <button className="btn" onClick={() => onDelete(game.game_id)}>
                Delete Game
              </button>
            </div>
          </div>
        </div>
      )}
    </GameContext.Consumer>
  );
};
