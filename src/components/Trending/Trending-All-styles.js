import styled from "styled-components";

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  @media screen and (min-width: 768px){
    flex-direction: row;
  }
`;

export const TrendingTitle = styled.h2`
  width: fit-content ;
  font-size: 1.8em;
  font-weight: 500;
  border-bottom: 5px solid #F2588A;
`;

export const Description = styled.p`
  line-height: 26px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (min-width: 768px){
    margin-left: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Rating = styled.p`
  padding: 15px 25px;
  /* padding: 15px 25px 15px 0; */
  margin: 10px 0;
  background-color: #FB8C00;
`;