import React from 'react';
import Navbar from '../Navbar/Navbar';
import { LayoutContainer } from '../Styled-components/LayoutContainer';
import SearchMovies from '../../containers/Search-movies';

const Header = () => {
  return (
    <header>
      <Navbar />
      <LayoutContainer>
        <SearchMovies />
      </LayoutContainer>
    </header>
  )
};

export default Header;