import React from "react";

export const GameCard = ({ game, deleteGame, favoriteGame, playedGame }) => {
  return (
    <div className="result-card">
      <div className="cover-wrapper"></div>
      <img
        src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.image_id}.jpeg`}
        alt={`${game.name} Cover`}
      />

      <div className="info">
        <div className="header">
          <h3 className="name">{game.name}</h3>
        </div>
        <div className="controls">
          <button className="btn" onClick={() => deleteGame(game.id)}>
            Delete Game
          </button>
          <button className="btn" onClick={() => playedGame(game.id)}>
            Played Game
          </button>
          <button className="btn" onClick={() => favoriteGame(game.id)}>
            Favorite Game
          </button>
        </div>
      </div>
    </div>
  );
};
