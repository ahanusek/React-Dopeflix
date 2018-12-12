import React from "react";
import { Img } from "../Globalstyles/Img";
import { Button } from "../Globalstyles/Button";
import { TrendingContainer, TrendingTitle } from "./Trending-All-styles";

const TrendingAll = (props) => {

  return (
    <>
      <TrendingTitle>Polecane teraz:</TrendingTitle>
      <TrendingContainer>
        <div>
          <Img src={'https://image.tmdb.org/t/p/w500' + props.image} />
        </div>
        <div>
          <p>Tytuł: {props.movieName}</p>
          <p>Opis: {props.description}</p>
          <p>Liczba glosów: {props.ratingCount}</p>
          <p>Ocena: {props.rating}</p>
          <Button>Zobacz więcej</Button>
        </div>
      </TrendingContainer>
    </>
  )
};

export default TrendingAll;