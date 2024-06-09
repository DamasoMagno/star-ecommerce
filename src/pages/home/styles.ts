import styled from "styled-components";

export const Header = styled.header`
  border-bottom: 1px solid #2a2a2a;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1200px;
    margin: 0 auto;
    padding: 0.5rem 1rem;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.white};
    }

    .search-product {
      display: flex;
      align-items: center;
      background-color: rgba(26, 26, 26, 0.5);
      border: 1px solid rgba(26, 26, 26, 0.5);
      border-radius: 8px;
      padding: 0.5rem;

      input {
        background-color: transparent;
        outline: 0;
        border: 0;
      }

      svg {
        color: #fff;
        width: 1rem;
        height: 1rem;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      gap: 1rem;

      button {
        background-color: transparent;
        border: 1px solid #333;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
      }
    }
  }
`;

export const ProductCategory = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  max-width: 1200px;
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;

  .products {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;

    strong {
      font-size: 1.15rem;
      font-weight: bold;
      color: ${(props) => props.theme.white};
    }
  }
`;
