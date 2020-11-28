import React, { Component } from "react";
import "./FilterableList.css";
import ListItem from "../ListItem/ListItem";

class FilterableList extends Component {
  render() {
    const list = this.props.games.map((file, key) => (
      <ListItem {...file} key={key} />
    ));
    return <div className="FilterableList">{list}</div>;
  }
}

FilterableList.defaultProps = {
  games: [],
};

export default FilterableList;
