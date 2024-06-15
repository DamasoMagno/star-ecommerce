import styled from "styled-components";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  position: relative;
`;

export const Slider = styled(Swiper)``;

export const ButtonsNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 105%;
  position: absolute;
  z-index: 9;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -150%);

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 0;
    outline: 0;
    transition: filter 0.25s;
    color: ${(props) => props.theme["white"]};
    background-color: ${(props) => props.theme["black"]};
    border-radius: 100%;
    padding: 0.25rem;
    z-index: 0;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
