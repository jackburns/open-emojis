import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./EmojiResultRow.css";

class EmojiResultsRow extends PureComponent {
  render() {
    const src = this.props.symbol;
    return (
      <div
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol}
      >
        <span alt={this.props.title} className="emoji">
          {src}
        </span>
        <span className="title">{this.props.title}</span>
      </div>
    );
  }
}
EmojiResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};
export default EmojiResultsRow;
