import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #7289da;
    --primary-dark: #5c7bb1;
    --black: #171717;
    --white: #f9f9f9;
    --grey: #333333;
    --dark-grey: #212121;
    
    --text: #828282;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    color: var(--white);
    scroll-behavior: smooth;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: var(--black);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  img {
    display: block;
  }
  
  @media (max-width: 426px) {
    header, section {
      max-width: 80%;
    }
  }

  #root {
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;
