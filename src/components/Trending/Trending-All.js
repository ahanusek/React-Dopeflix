import React from "react";
import { Img } from "../Globalstyles/Img";
import { Button } from "../Globalstyles/Button";
import { TrendingContainer, TrendingTitle, Description, TextContent, Wrapper, Rating } from "./Trending-All-styles";

const TrendingAll = (props) => {

  return (
    <>
      <div>
        <TrendingTitle>Popularne:</TrendingTitle>
        <TrendingContainer>
          <div>
            <Img src={'https://image.tmdb.org/t/p/w500' + props.image} />
          </div>
          <TextContent>
            <p>Tytuł: {props.movieName}</p>
            <Description>Opis: {props.description}</Description>
            <p>Liczba glosów: {props.ratingCount}</p>
            <Wrapper>
              <Button>Zobacz więcej</Button>
              <Rating>Ocena: {props.rating}</Rating>
            </Wrapper>
          </TextContent>
        </TrendingContainer>
      </div>
    </>
  )
};

export default TrendingAll;