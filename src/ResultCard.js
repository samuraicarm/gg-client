import React from "react";

export const ResultCard = ({ data }) => {
  return (
    <div className="result-card">
      <div className="image-wrapper">
        {data.image ? (
          <img src={`data.image`} alt={`${data.game} Cover`} />
        ) : (
          <div className="filler-image></div>"></div>
        )}
      </div>

      <div className="info">
        <h3 className="title">{data.game}</h3>
        <h3 className="console"> {data.console}</h3>
      </div>
      <div className="controsl">
        <button className="btn">Add to Play List</button>
      </div>
    </div>
  );
};
