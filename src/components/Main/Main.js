import React from "react";
import { Route } from "react-router-dom";
import Trending from "../../containers/Trending/Trending";
import More from "../../containers/More/More";
import "./main.scss";

const Main = () => {
  return (
    <main>
      <Route path="/" exact component={Trending} />
      <Route path="/more/:id" component={More} />
    </main>
  )
}

export default Main;