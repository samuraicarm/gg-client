import React, { Component } from "react";
import SearchBar from "src/SearchBar/SearchBar";
import FilterableList from "./src/FilterableList/FilterableList";

class SearchMyGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      filterOption: "All",
    };
  }
  updateSearchTerm(term) {
    this.setState({
      searchTerm: term,
    });
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option,
    });
  }
  render() {
    return (
      <div className="SearchMyGames">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={(term) => this.updateSearchTerm(term)}
          handleFilterChange={(option) => this.updateFilterOption(option)}
        />
        <FilterableList
          games={this.props.games}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
        />
      </div>
    );
  }
}

export default SearchMyGames;
