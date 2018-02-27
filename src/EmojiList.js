import React from "react";
import { Emoji } from "./Emoji";
import "./EmojiList.css";

export const EmojiList = props => {
  return (
    <div className="emoji-list">
      {props.list.map(emoji => {
        return <Emoji key={emoji.title} emoji={emoji} />;
      })}
    </div>
  );
};
