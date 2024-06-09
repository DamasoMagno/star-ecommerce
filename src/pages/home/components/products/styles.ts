import styled from "styled-components";

export const ButtonsNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 0;
    outline: 0;
    transition: filter 0.25s;
    color: ${(props) => props.theme["white"]};
    z-index: 0;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
