import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #003366;
    padding: 0;
    margin: 0;
    font-family: Roboto;
    font-size: 16px;
    color: white;

    @media screen and (min-width: 768px) and (max-width:1024px){
      background-color: #000000;
    } 
    @media screen and (max-width: 768px){
      background-color: #000000;
    } 
  }
`;

export const BorderRadius = css`
border-radius: 20px 20px 20px 20px;
-moz-border-radius: 20px 20px 20px 20px;
-webkit-border-radius: 20px 20px 20px 20px;
`;


export default GlobalStyle;