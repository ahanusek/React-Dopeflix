import React from "react";
import "./moreOutput.scss";

const More = (props) => {

  const categories = props.genres.map(item => {
    return item.name
  })

  const productionCountry = props.productionCountry.map(item => {
    return item.name
  })

  return (
    <section className="more">
      <p>Id: {props.id}</p>
      <p>Tytuł: {props.title}</p>
      <span>Tytuł oryginalny: {props.originalName}</span>
      <p>Opis: {props.description}</p>
      <p>{props.cover}</p>
      <p>Kategorie: {categories}</p>
      <p>
        <a href={props.homepage}>
          Strona Główna
        </a>
      </p>
      <p>Produkcja: {productionCountry}</p>
      <p>Premiera: {props.releaseDate}</p>
      <p>Status: {props.status}</p>
      <p>Popularność: {props.popularity}</p>
      <p>Średnia ocena: {props.voteAverage}</p>
      <p>Liczba głosów: {props.voteCount}</p>
    </section>
  )
}

export default More;