import React from "react";
import Navbar from "../Navbar/Navbar";
import { LayoutContainer } from "../Globalstyles/LayoutContainer";
import SearchMovies from "../../containers/Search-movies";

const Header = () => {
  return (
    <header>
      <Navbar />
      <LayoutContainer>
        <SearchMovies /> {/* render input and data.. */}
      </LayoutContainer>
    </header>
  );
};

export default Header;
