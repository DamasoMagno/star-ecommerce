
import { Product } from "@/components/product";
import { Container } from "./styles";

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
