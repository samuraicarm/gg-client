import React, { Component } from "react";

class AddGame extends Component {
  render() {
    return (
      <div className="addgame">
        <h2>Add Game</h2>
        <form className="addgame__form">
          <label htmlFor="Game">Game</label>
          <input type="game" name="game" id="game" placeholder="Game" />
          <label htmlFor="platform">Platform</label>
          <input
            type="platform"
            name="platform"
            id="platform"
            placeholder="Platform"
          />
          <select id="status">
            <option value="played">played</option>
            <option value="want to play">want to play</option>
            <option value="playing">playing</option>
          </select>
          <div className="addgame__buttons">
            <button>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddGame;
