import styled, { css } from "styled-components";

export const Container = styled.header`
  border-bottom: 1px solid #2a2a2a;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1200px;
    margin: 0 auto;
    padding: 0.5rem 1rem;

    a {
      text-decoration: none;
      font-weight: bold;
      font-size: 1rem;
      color: ${(props) => props.theme["dark-purple"]};

      strong {
        margin-left: 1px;
        color: ${(props) => props.theme["white"]};
      }
    }

    .search {
      button {
        background-color: rgba(26, 26, 26, 0.5);
        border: 1px solid rgba(26, 26, 26, 0.5);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;

        svg {
          width: 1rem;
          height: 1rem;
        }
      }

      .search_product {
        display: none;
        align-items: center;
        width: 100%;
        max-width: 400px;
        background-color: rgba(26, 26, 26, 0.5);
        border: 1px solid rgba(26, 26, 26, 0.5);
        border-radius: 8px;
        transition: border-color 0.25s, color 0.25s;
        padding: 0.875rem 1rem;

        input {
          background-color: transparent;
          outline: 0;
          border: 0;
          color: ${(props) => props.theme["white"]};
          font-size: 0.875rem;
          flex: 1;
        }

        svg {
          color: #fff;
          width: 1rem;
          height: 1rem;
        }

        &:focus-within {
          border-color: ${(props) => props.theme["dark-purple"]};

          svg {
            color: ${(props) => props.theme["dark-purple"]};
          }
        }
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      gap: 0.875rem;

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

interface Search {
  visible: boolean;
}

export const SearchProduct = styled.div<Search>`
  svg {
    color: #fff;
    width: 1rem;
    height: 1rem;
  }

  .search_product {
    display: none;
    align-items: center;
    width: 100%;
    max-width: 400px;
    background-color: rgba(26, 26, 26, 0.5);
    border: 1px solid rgba(26, 26, 26, 0.5);
    border-radius: 8px;
    transition: border-color 0.25s, color 0.25s;
    padding: 0.875rem 1rem;

    input {
      background-color: transparent;
      outline: 0;
      border: 0;
      color: ${(props) => props.theme["white"]};
      font-size: 0.875rem;
      flex: 1;
    }

    button {
      background-color: transparent;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 0.75rem;

      @media (min-width: 728px) {
        display: none;
      }
    }

    &:focus-within {
      border-color: ${(props) => props.theme["dark-purple"]};
    }
  }

  .open_search {
    background-color: rgba(26, 26, 26, 0.5);
    border: 1px solid rgba(26, 26, 26, 0.5);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 0.5rem;
  }

  @media (min-width: 728px) {
    .search_product {
      display: flex;
    }

    .open_search {
      display: none;
    }
  }

  @media (max-width: 728px) {
    ${(props) => {
      if (props.visible) {
        return css`
          .search_product {
            background-color: ${props => props.theme["black"]};
            display: flex;
            position: absolute;
            left: 50%;
            top: 0%;
            transform: translate(-50%, 10%);
            width: 95%;
          }
        `;
      }
    }}
  }
`;
