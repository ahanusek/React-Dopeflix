import styled from 'styled-components';

export const Input = styled.input`
  width: 250px;
  text-align: center;
  border: 0;
  border-bottom: 3px solid #fafafa;
  outline: 0;
  padding: 10px 0;
  color: #fafafa;
  background-color: rgba(0,0,0, 0.1);

  @media screen and (min-width: 768px){
    width: 350px;
  }
`;