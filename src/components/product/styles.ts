import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    background-color: ${(props) => props.theme["dark-purple"]};
    color: ${(props) => props.theme["white"]};
    border-radius: 8px;
    border: 0;
    height: 2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
    font-size: 0.85rem;
    transition: filter 0.25s;

    svg {
      width: 0.85rem;
      height: 0.85rem;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Content = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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

    .discount {
      background-color: ${(props) => props.theme["dark-purple"]};
      color: ${(props) => props.theme["white"]};
      display: flex;
      align-items: center;
      align-self: flex-start;
      gap: 0.25rem;
      border-radius: 4px;
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    }

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
`;
