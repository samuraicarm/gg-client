import React, { Component } from "react";
import GameContext from "../context/GameContext";

import { API_ENDPOINT, API_KEY } from "../feconfig";

class Add extends Component {
  static contextType = GameContext;

  state = {
    search: "",
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const search = this.state.search;
    console.log(this.state.value);
    fetch(`${API_ENDPOINT}/api/games?search=${search}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then(console.log);
  };

  render() {
    return (
      <div>
        <h2> Search for games to add to your play list.</h2>
        <form onSubmit={this.handleSubmit} className="search">
          <input
            type="text"
            name="query"
            value={this.state.search}
            onChange={this.handleChange}
            placeholder="search G00d Games"
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Add;
