import React, { Component } from "react";
import "./App.css";

import AddBookmark from "./AddGame/AddGame";
import BookmarkApp from "./GameSearch/GameSearch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      showAddForm: false,
    };
  }

  render() {
    const page = this.state.showAddForm ? (
      <AddGame />
    ) : (
      <GameSearch games={this.state.games} />
    );

    return <div className="App">{page}</div>;
  }
}

export default App;
