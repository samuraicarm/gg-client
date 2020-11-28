import React, { Component } from "react";
import "./ListItem.css";
import ControlBar from "../ControlBar/ControlBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faDesktop } from "@fortawesome/free-solid-svg-icons";

import {
  faSteam,
  faPlaystation,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";

class ListItem extends Component {
  render() {
    const icons = {
      Playstation: faPlaystation,
      Xbox: faXbox,
      Steam: faSteam,
      Switch: faGamepad,
      PC: faDesktop,
    };

    return (
      <div className="ListItem">
        <div className="ListItem__icon">
          <div className="ListItem__circle">
            <FontAwesomeIcon icon={icons[this.props.plaform] || faGamepad} />
          </div>
        </div>
        <div className="ListItem__content">
          <div className="ListItem__heading">
            <div className="ListItem__title">{this.props.gameName}</div>
            <div className="ListItem__dateAdded">{this.props.dateAdded}</div>
          </div>
          <div className="ListItem__actions">
            <div className="ListItem__status">{this.props.status}</div>
            <ControlBar />
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
