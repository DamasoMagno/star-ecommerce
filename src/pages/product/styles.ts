import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  gap: 1rem;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 1rem auto;
  padding: 0 1rem;

  @media (min-width: 728px) {
    grid-template-columns: 540px 1fr;
  }
`;

export const Image = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme["black-01"]};
  border-radius: 8px;
  height: 100%;
  padding: 2rem;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;

  .product_info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .product_name {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      strong {
        color: ${(props) => props.theme["white"]};
        font-size: 1.5rem;
      }

      span {
        color: ${(props) => props.theme["dark-purple"]};
      }
    }

    .product_price {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      .original_price {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        .discount {
          background-color: ${(props) => props.theme["dark-purple"]};
          color: ${(props) => props.theme["white"]};
          display: flex;
          align-items: center;
          align-self: flex-start;
          gap: 0.25rem;
          border-radius: 4px;
          padding: 0.25rem 0.4rem;
          font-size: 0.75rem;
        }

        .price {
          color: #676767;
          font-size: 0.875rem;
          text-decoration: line-through;
        }
      }

      span {
        color: ${(props) => props.theme.white};
        font-size: 1.5rem;
        font-weight: bold;
      }
    }

    .product_description {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      span {
        color: ${(props) => props.theme["white"]};
        font-size: 0.85rem;
      }

      p {
        line-height: 1.6;
        color: ${(props) => props.theme["white"]};
      }
    }
  }

  button {
    background-color: ${(props) => props.theme["dark-purple"]};
    border: 0;
    outline: 0;
    height: 3rem;
    color: ${(props) => props.theme["white"]};
    border-radius: 4px;
  }
`;
