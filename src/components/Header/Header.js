import React from 'react';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import { LayoutContainer } from '../Styled-components/LayoutContainer';

const Header = () => {
  return (
    <header>
      <Navbar />

      {/* LayoutContainer = container with: width: 80% margin: auto */}
      <LayoutContainer>
        <Search test="Wpisz fraze.." />
      </LayoutContainer>

    </header>
  )
};

export default Header;