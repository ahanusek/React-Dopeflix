import styled from 'styled-components';

// //mobile first

export const Nav = styled.nav`
  background-color: #f2588a;
`;

export const BrandLogo = styled.p`
  position: unset;
  font-weight: 500;
  margin: 0;

  @media screen and (min-width: 768px) {
    position: absolute;
  }
`;

export const Hamburger = styled.i`
  position: absolute;
  right: 0;
  top: 0;
  
  @media screen and (min-width: 768px){
    display: none;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 80%;
  min-height: 60px;
  line-height: 60px;
  margin: auto;
`;

export const Ul = styled.ul`
  display: none; //default mobile off
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    display: block;
    text-align: right;
  }
`;

export const Li = styled.li`
  display: block;
  font-weight: 300;
  padding: 0 10px;
  color: #fff;

  @media screen and (min-width: 768px) {
    display: inline;
  }
`;