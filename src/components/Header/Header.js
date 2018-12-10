import React from 'react';
import Navbar from '../Navbar/Navbar';
import { LayoutContainer } from '../Styled-components/LayoutContainer';
import SearchMovies from '../../containers/Search-movies';

const Header = (props) => {
  return (
    <header>
      <Navbar />
      <LayoutContainer>
        <SearchMovies /> {/* render input and data.. */}
      </LayoutContainer>
    </header>
  )
};

export default Header;