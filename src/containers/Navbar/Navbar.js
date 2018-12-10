import React from 'react';
import { Nav, BrandLogo, Hamburger, Wrapper, Ul, Li } from './Navbar-styles';

const foo = (e) => {
  alert(e)
};

const Navbar = () => {
  return (
    <Nav>
      <Wrapper>
        <BrandLogo>React-Dopeflix</BrandLogo>
        <Hamburger onClick={foo}>
          <i className="fas fa-bars"></i>
        </Hamburger>
        <Ul>
          <Li>Seriale</Li>
          <Li>Filmy</Li>
          <Li>Aktorzy</Li>
        </Ul>
      </Wrapper>
    </Nav>
  )
};

export default Navbar;