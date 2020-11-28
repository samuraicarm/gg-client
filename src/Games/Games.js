import React, { Component } from "react";
import GameSearch from "./GameSearch/GameSearch";

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      searchField: "",
    };
  }

  //set state every time type into input box
  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    let url = "https://api.igdb.com/v4/games";
    let params = this.state.searchField;
    let searchUrl = url + params;
    const options = {
      method: "GET",
      headers: {
        // Add your key after Bearer
        "Accept": "application/json",
        "Client-ID": "r1psyxnqb0ubhhlvmh132qdhastfj3",
        "Authorization": "Bearer access_token gpgwx53hphnvre7ydkwu0vgoifq59s",
      },
      data: "name;"
    })


    fetch(searchUrl, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          games: data,
          error: null,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    return (
      <div>
        <GameSearch
          searchGame={this.searchGame}
          handleSearch={this.handleSearch}
        />
      </div>
    );
  }
}

export default Games;
