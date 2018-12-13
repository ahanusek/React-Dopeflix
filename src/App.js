import React, { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./index.scss";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
