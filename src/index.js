import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const Games = [
  {
    gameName: "Among Trees",
    platform: "Steam",
    dateAdded: "1 day ago",
    status: "Want to Play",
  },

  {
    gameName: "What Remains of Edith Finch",
    platform: "Switch",
    dateAdded: "3 weeks go",
    status: "Played",
  },

  {
    gameName: "Zelda: Breath of the Wild",
    platform: "Switch",
    dateAdded: "1 year ago",
    status: "Playing",
  },
  {
    gameName: "The Gardens Between",
    platform: "Switch",
    dateAdded: "1 year ago",
    status: "Playing",
  },
];

ReactDOM.render(<App games={Games} />, document.getElementById("root"));
