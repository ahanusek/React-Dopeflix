import React from "react";
import "./search-output.scss";

const SearchOutput = (props) => {
  return (
    <>
      <span className="item">{props.name}</span>
    </>
  )
}

export default SearchOutput;