import React from "react";
import { Link } from "react-router-dom";
import "./searchOutput.scss";

const SearchOutput = props => {
  return (
    <span className="item">
      <Link to={"/more/" + props.id}>
        {props.name} {props.title}
      </Link>
    </span>
  );
};

export default SearchOutput;
