import React from "react";

export const ResultCard = ({ game, onAdd }) => {
  //const storedGame = game.find(o => o.game.id === game.id)};
  // const addGameDisabled = storedGame ? true : false;
  if (!game) return null;
  return (
    <div className="result-card">
      <div className="cover-wrapper"></div>
      {game.cover?.image_id ? (
        <img
          src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpeg`}
          alt={`${game.name} Cover`}
        />
      ) : (
        <div className="filler-cover"> </div>
      )}

      <div className="info">
        <div className="header">
          <h3 className="name">{game.name}</h3>
          <h4 className="release-date">
            {game.first_release_date ? game.first_release_date : "-"}
          </h4>
          <p className="genre"> {game.genres ? game.genres[0].name : null}</p>
        </div>
        <div className="controls">
          <button
            className="btn"
            //disabled={addGameDisabled}
            onClick={() => onAdd(game)}
          >
            Add to Play List
          </button>
        </div>
      </div>
    </div>
  );
};
