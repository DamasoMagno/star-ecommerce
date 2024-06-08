import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: #0b0b0b;
    font-size: 0.875rem;

    @media (min-width: 728px) {
      font-size: 1rem;
    }
  }
`;
