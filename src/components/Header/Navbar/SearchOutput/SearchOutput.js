import React from "react";
import "./searchOutput.scss";

const SearchOutput = (props) => {

  const click = (id) => {
    alert(id)
  }

  return (
    <span onClick={() => { click(props.id) }} className="item">{props.name} {props.title}</span>
  )
}

export default SearchOutput;