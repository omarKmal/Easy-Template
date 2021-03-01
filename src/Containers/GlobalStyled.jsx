import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }
  html,body{
    overflow-x: hidden;
    
    background-color: #f2f5f9;
  }
`;
export default GlobalStyled;
