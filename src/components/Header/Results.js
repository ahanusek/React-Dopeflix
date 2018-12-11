import React from "react";
import { Img } from '../Globalstyles/Img';

const Item = props => {
  return (
    <>
      <p>{props.name}</p>
      <Img src={'https://image.tmdb.org/t/p/w500' + props.image} alt="Brak obrazka" />
      <p>{props.description}</p>
      </>
  )
};

export default Item;
