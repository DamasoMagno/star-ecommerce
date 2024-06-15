import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-size: 0.875rem;

    @media (min-width: 728px) {
      font-size: 1rem;
    }
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  [disabled]{
    cursor: not-allowed;
    opacity: .75;
  }

  a {
    text-decoration: none;
  }

  .teste {
    background-color: #0b0b0b;
    min-height: 100vh;
    padding: 0 0 1rem;
  }
`;
