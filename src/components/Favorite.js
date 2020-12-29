import React, { Component } from "react";

class Favorite extends Component {
  render() {
    const favorite = true;
    return (
      <span
        className="favorite"
        aria-label={favorite ? "Favorite" : "Not Favorite"}
      >
        {favorite ? "🌟" : ""}
      </span>
    );
  }
}

export default Favorite;
