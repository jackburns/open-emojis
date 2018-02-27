import React, { Component } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import "./App.css";
import emojis from "./emojiList.json";
import { EmojiList } from "./EmojiList";

class App extends Component {
  state = {
    searchTerm: "",
    searchResults: [],
  };

  handleSearchChange = input => {
    this.setState(
      {
        searchTerm: input,
      },
      this.parseResult(),
    );
  };

  parseResult = () => {
    const results = emojis.filter(item => {
      const searchString = item.title + item.keywords;
      return searchString.includes(this.state.searchTerm);
    });
    this.setState({
      searchResults: results,
    });
  };

  render() {
    console.log(this.state.searchResults);
    return (
      <div className="app">
        <Header />
        <SearchInput onChange={this.handleSearchChange} />
        <EmojiList list={this.state.searchResults} />
      </div>
    );
  }
}
export default App;
