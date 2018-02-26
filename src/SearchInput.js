import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

class SearchInput extends PureComponent {
  handleChange = event => {
    if (event) {
      this.props.onChange(event.target.value);
    }
  };

  render() {
    return (
      <div className="search-input">
        <input onChange={this.handleChange} />
      </div>
    );
  }
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default SearchInput;
