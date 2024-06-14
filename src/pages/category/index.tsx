
import { Container } from "./styles";
import { Product } from "@/components/product";

export function Category() {
  return (
    <Container>
      <span>Categoria: <strong>Mouse</strong></span>

      <div className="products">
        {Array.from({ length: 10 }).map((_, i) => (
          <Product key={i} />
        ))}
      </div>
    </Container>
  );
}
