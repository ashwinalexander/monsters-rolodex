import React from "react";
import "./searchbox.styles.css";

export const Searchbox = (props) => (
  <input
    className="search"
    type="search"
    placeholder={props.placeholderText}
    onChange={props.handleChange}
  />
);
