import styled from "styled-components";

export const Container = styled.header`
  border-bottom: 1px solid #2a2a2a;

  .content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;

    display: grid;
    grid-gap: 1rem;
    align-items: center;
    justify-content: space-between;
    grid-template-areas:
      "logo navigation"
      "search search";

    @media (min-width: 720px) {
      grid-template-areas: "logo search navigation";
    }

    a {
      grid-area: logo;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.15rem;
      color: ${(props) => props.theme["dark-purple"]};

      strong {
        margin-left: 1px;
        color: ${(props) => props.theme["white"]};
      }
    }

    .filter {
      grid-area: search;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .menu {
        display: flex;
        border-radius: 8px;
        padding: 0.5rem;
        align-items: center;
        justify-content: center;
        border: 0;
        background-color: transparent;
        transition: filter 0.25s;

        &:hover {
          filter: brightness(0.8);
        }

        svg {
          width: 1.5rem;
          height: 1.5rem;
          color: white;
        }
      }

      .search_product {
        display: flex;
        align-items: center;
        width: 100%;
        background-color: rgba(26, 26, 26, 0.5);
        border: 1px solid rgba(26, 26, 26, 0.5);
        border-radius: 8px;
        transition: all 0.25s;
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
        }

        @media (min-width: 728px) {
          margin: 0 auto;
          width: 400px;
        }
      }
    }

    .navigation {
      grid-area: navigation;
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 0.5rem;

      button {
        background-color: transparent;
        border: 1px solid #333;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;

        svg {
          width: 1.15rem;
          height: 1.15rem;
          color: ${(props) => props.theme["white"]};
        }
      }
    }
  }
`;
