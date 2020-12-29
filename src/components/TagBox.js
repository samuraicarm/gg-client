import React, { Component } from "react";
import GameContext from "../context/GameContext";

export class TagBox extends Component {
  static defaultProps = {
    tags: [],
  };

  addInput = (tag) => {
    this.setState({
      tags: [this.state.tags.push({ text: "" }), tag],
    });
  };

  static ContextType = GameContext;

  render() {
    const { tags } = this.tags;

    console.log(JSON.stringify(tags));

    return (
      <div className="App">
        <h1>Enter Game Tags</h1>
        <div className="taglist">
          {tags.map((n, i) => (
            <input
              key={i}
              value={n.text}
              onChange={(e) => {
                tags[i].text = e.target.value;
                this.state.tags([...tags]);
              }}
            />
          ))}
        </div>
        <button onClick={this.addInput}>Add empty input</button>
      </div>
    );
  }
}

export default TagBox;
