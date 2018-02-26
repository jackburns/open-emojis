import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import "./App.css";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  handleSearchChange = input => {
    console.log(input);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchInput onChange={this.handleSearchChange} />
      </div>
    );
  }
}
export default App;
