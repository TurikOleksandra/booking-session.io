"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  p {
    margin: 0;
  }

  body, h1, h2, h3, h4, h5, h6, ul, ol, li {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
    button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    outline: none;
  }

  button:disabled {
    cursor: not-allowed;
  }

`;

export default GlobalStyle;
