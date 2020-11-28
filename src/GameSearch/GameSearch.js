import React, { Component } from "react";
import "./App.css";

import AddBookmark from "./addGame/addGame";


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
      <AddBookmark />
    ) : (

    );

    return <div className="App">{page}</div>;
  }
}

export default App;
