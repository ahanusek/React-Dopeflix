import React from "react";
import { Route } from "react-router-dom";
import HomeScreen from "../../components/Main/HomeScreen/HomeScreen";
import More from "../../containers/More/More";

const Main = () => {
  return (
    <main>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/more/:id" component={More} />
    </main>
  );
};

export default Main;
