import React from "react";

const GameSearch = (props) => {
  return (
    <div className="search-area">
      <form onSubmit={props.searchGame} action="">
        <input onChange={props.handleSearch} type="text" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default GameSearch;
