import * as Dialog from "@radix-ui/react-dialog";
import styled, { keyframes } from "styled-components";

const showOverlay = keyframes`
	0% { opacity: 0 }
  100% { opacity: 1 }
`;

const contentShow = keyframes`
	0% { opacity: 0; transform: 'translate(-50%, -48%) scale(.96)' }
  100% { opacity: 1; transform: 'translate(-50%, -50%) scale(1)' }
`;

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.25);
  position: fixed;
  inset: 0;
  animation: ${showOverlay} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Content = styled(Dialog.Content)`
  background-color: #0b0b0b;
  width: 100%;
  max-width: 340px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  button {
    background-color: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: white;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: white;
	  padding: 0 .5	rem;
      font-weight: bold;
    }

    nav {
      display: flex;
      flex-direction: column;
      gap: 0.15rem;

      a {
        padding: 1rem;
        color: white;
        border-radius: 4px;
        transition: all 0.25s;

        &:hover {
          background-color: rgba(0, 0, 0, 0.15);
        }
      }
    }
  }
`;
