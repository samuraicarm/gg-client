import React, { Component } from "react";
import "./FilterOptions.css";

class FilterOptions extends Component {
  render() {
    const { filterOption } = this.props;
    return (
      <div className="FilterOptions">
        <div className="FilterOptions__option">
          <label htmlFor="filter_all">
            <input
              type="radio"
              value="All"
              id="filter_all"
              name="filter"
              checked={filterOption === "All"}
              onChange={(e) => this.props.handleFilterChange(e.target.value)}
            />
            All
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_played">
            <input
              type="radio"
              value="Played"
              id="filter_played"
              name="filter"
              checked={filterOption === "played"}
              onChange={(e) => this.props.handleFilterChange(e.target.value)}
            />
            Played
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_playing">
            <input
              type="radio"
              value="Synced"
              id="filter_playing"
              name="filter"
              checked={filterOption === "playing"}
              onChange={(e) => this.props.handleFilterChange(e.target.value)}
            />
            Playing
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_toplay">
            <input
              type="radio"
              value="Want to Play"
              id="filter_to_play"
              name="filter"
              checked={filterOption === "Want to Play"}
              onChange={(e) => this.props.handleFilterChange(e.target.value)}
            />
            Want to Play
          </label>
        </div>
      </div>
    );
  }
}

export default FilterOptions;
