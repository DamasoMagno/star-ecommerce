import styled, { keyframes } from "styled-components";

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

export const Products = styled.main`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  margin: 0.5rem auto;
  padding: 0.5rem 1rem;

  .products {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    strong {
      font-size: 0.875rem;
      font-weight: bold;
      color: ${(props) => props.theme.white};
    }

    .products-list {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 1rem;
    }
  }
`;

const animatioe = keyframes`
  0% {
    bottom: -25px;
  }

  100% {
    bottom: 0;
  }
`;

export const Product = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.25s;
  gap: 0.5rem;
  overflow: hidden;
  height: 280px;

  .discount {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${(props) => props.theme["dark-purple"]};
    color: ${(props) => props.theme["white"]};
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border-radius: 16px;
    padding: 0.5rem;
    font-size: 0.75rem;
  }

  .image {
    border-radius: 10px;
    background-color: ${(props) => props.theme["black-01"]};
    padding: 1rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${(props) => props.theme.white};

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme.white};
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      p {
        font-weight: bold;
        color: ${(props) => props.theme.white};
        font-size: 1.175rem;
      }

      span {
        color: #676767;
        font-size: 0.875rem;
      }
    }
  }

  button {
    background-color: ${(props) => props.theme["dark-purple"]};
    color: ${(props) => props.theme["white"]};
    border-radius: 12px;
    border: 0;
    height: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    position: absolute;
    bottom: -50px;
    width: 100%;
  }

  &:hover {
    button {
      animation: ${animatioe} forwards .25s;
    }
  }
`;
