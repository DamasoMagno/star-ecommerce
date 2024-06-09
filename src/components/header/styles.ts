import styled from "styled-components";

export const Container = styled.header`
  border-bottom: 1px solid #2a2a2a;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 1200px;
    margin: 0 auto;
    padding: .5rem 1rem;

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

    .search-product {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 400px;
      background-color: rgba(26, 26, 26, 0.5);
      border: 1px solid rgba(26, 26, 26, 0.5);
      border-radius: 8px;
      transition: border-color .25s, color .25s;
      padding: 0.875rem 1rem;

      input {
        background-color: transparent;
        outline: 0;
        border: 0;
        color: ${props => props.theme["white"]};
        font-size: .875rem;
        flex: 1;
      }

      svg {
        color: #fff;
        width: 1rem;
        height: 1rem;
      }

      &:focus-within {
        border-color: ${props => props.theme["dark-purple"]};

        svg {
          color: ${props => props.theme["dark-purple"]};
        }
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      gap: .875rem;

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