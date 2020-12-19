import React from "react";

const GameList = (props) => {
  //looking for specific properties
  const { img, name, platform } = props;

  //run only when I click it
  const addToPlaylist = (name) => {
    console.log(name);
  };

  return (
    <article className="game">
      <img src={img} alt="" />
      <h4 onClick={() => console.log(name)}>{name}</h4>
      <p>{platform}</p>
      <button className="btn" type="button" onClick={() => addToPlaylist(name)}>
        + Add to Play List
      </button>
    </article>
  );
};
export default GameList;
