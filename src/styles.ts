import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
    background: #424242 url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png');
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #fff;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    transition: 0.2s;
    
    @media only screen and (min-width: 600px) {
      &:hover {
        background-color: #efefef;
      }
    }
  }
 `;
