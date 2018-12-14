import React from "react";
import { Route } from "react-router-dom";
import Trending from "../../containers/Trending/Trending";
import More from "./More/More";
import "./main.scss";

const Main = () => {
  return (
    <main>
      <Route path="/" exact component={Trending} />
      <Route path="/more" component={More} />
    </main>
  )
}

export default Main;