import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    padding: 0;
    margin: 0;
    color: #fff;
    background-color: #21273D;
  }
  
  &, &::before, &::after{
    box-sizing: border-box;
  }
`;

const Layout = (props) => {
  return (
    <>
      <GlobalStyle />
      {props.children}
    </>
  )
};

export default Layout;