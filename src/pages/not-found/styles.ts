import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme["white"]};
  }

  a  {
	display: flex;
	align-items: center;
	gap: .25rem;
	color: ${props => props.theme["white"]};
	font-size: 1rem;
  }
`;
