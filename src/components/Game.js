import React from "react";
import GameContext from "../context/GameContext";
import Favorite from "./Favorite";

function deleteGameRequest() {
  alert("game deleted");
  console.log("recived delete game request");
}

function playedGameRequest(id) {
  alert("marked as played");
  console.log("recived played game request", { id });
}

function favoriteGameRequest(id) {
  alert("marked as favorite");
  console.log("received favorite game request", { id });
}

export default function Game(props) {
  return (
    <GameContext.Consumer>
      {(context) => (
        <div className="game">
          <li>
            <Favorite />
            <h3>{props.name}</h3>
            <img src={props.img} alt={props.name} />
            <p>{props.status}</p>
            <p>{props.platform}</p>
            <button
              onClick={() => {
                deleteGameRequest(props.id, context.deleteGame);
              }}
            >
              Remove
            </button>
            <button
              onClick={() => {
                playedGameRequest(props.id, context.playedGame);
              }}
            >
              Played
            </button>
            <button
              onClick={() => {
                favoriteGameRequest(props.id, context.favoritegame);
              }}
            >
              Favorite
            </button>
            <button>Tags </button>
          </li>
        </div>
      )}
    </GameContext.Consumer>
  );
}
