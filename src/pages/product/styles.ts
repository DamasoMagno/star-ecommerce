import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  height: 80vh;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1rem;
`;

export const Image = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["black-01"]};
  border-radius: 8px;
  height: 100%;

  img {
    width: 100%;
    max-width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    color: ${props => props.theme.white};
  }

  span {
    color: purple;
  }

  button {
    background-color: ${props => props.theme["dark-purple"]};
    border: 0;
    outline: 0;
    height: 2rem;
    color: ${props => props.theme["white"]};
    border-radius: 4px;
  }
`;
