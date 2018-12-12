import styled from 'styled-components';

export const LayoutContainer = styled.div`
  /* height: calc(50vh - 60px); */
  width: 90%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  /* text-align: center; */
  margin: auto;

  @media screen and (min-width: 768px){
    width: 80%;
  }
`;