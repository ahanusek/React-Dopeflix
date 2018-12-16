import React from "react";
import "./moreOutput.scss";

const More = (props) => {

  // console.log(props.genres.map(item => { console.log(item.name) }))
  const xd = props.genres.map(item => {
    // console.log(item.name);
    return item.name
  })

  return (
    <section className="more">
      <h1>Id: {props.id}</h1>
      <p>{props.title}</p>
      <span>{props.originalName}</span>
      <p>{props.description}</p>
      <p>{props.cover}</p>
      <p>{xd}</p>
      <p>{props.homepage}</p>
      {/* <p>{props.productionCountry}</p> */}
      <p>{props.releaseDate}</p>
      <p>{props.status}</p>
      <p>{props.popularity}</p>
      <p>{props.voteAverage}</p>
      <p>{props.voteCount}</p>
      {/* <p>{props.}</p> */}
    </section>
  )
}

export default More;