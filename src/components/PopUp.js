import React, { Component } from "react";
import TagBox from "./TagBox";

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };
  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick.bind(this)}>
            &times;{" "}
          </span>
          <TagBox />
        </div>
      </div>
    );
  }
}
