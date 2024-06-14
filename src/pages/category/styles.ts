import styled from "styled-components";

export const Container = styled.main`
  max-width: 1200px;
  margin: 2rem auto 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    color: ${props => props.theme.white};
    font-size: 1.25rem;
  }

  .products {
    display: grid;
    gap: 2rem;

    @media (min-width: 728px){
      grid-template-columns: repeat(5, 1fr);
    }
  }
`
