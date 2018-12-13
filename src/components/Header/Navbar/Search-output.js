import React from "react";
import "./search-output.scss";

const SearchOutput = (props) => {

  const click = (id) => {
    console.log(id)
  }

  return (
    <>
      <span onClick={() => { click(props.id) }} className="item">{props.name}</span>
    </>
  )
}

export default SearchOutput;