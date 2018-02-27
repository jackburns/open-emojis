import React from "react";

export const Emoji = ({ emoji }) => {
  return (
    <div
      style={{
        flex: "1 0 200px",
        margin: "15px",
        padding: "15px",
      }}
    >
      <span>{emoji.symbol}</span>
      <span>{emoji.title}</span>
    </div>
  );
};
