import React from "react";
import "./moreOutput.scss";

const More = (props) => {
  console.log(props);
  return (
    <section className="more">
      <h1>Id: {props.id}</h1>
    </section>
  )
}

export default More;