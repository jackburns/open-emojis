import React, { Component } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSearchChange = input => {
    console.log(input);
  };

  render() {
    return (
      <div className="app">
        <Header />
        <SearchInput onChange={this.handleSearchChange} />
      </div>
    );
  }
}
export default App;
