import React, { Component } from "react";
import GameContext from "../context/GameContext";
import { ResultCard } from "./ResultCard";
import { API_ENDPOINT, API_KEY } from "../config";

class Add extends Component {
  static contextType = GameContext;

  state = {
    search: "",
    results: [],
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const search = this.state.search;
    console.log(this.state.search);
    fetch(`${API_ENDPOINT}/api/games?search=${search}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          results: data,
          error: null,
        });
        console.log(data);
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  };

  render() {
    console.log(this.context);
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
        {this.state.results.length > 0 && (
          <ul className="results">
            {this.state.results.map((game) => (
              <li key={game.id}>
                <ResultCard game={game} onAdd={this.context.addGame} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Add;
