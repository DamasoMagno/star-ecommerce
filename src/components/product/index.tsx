import { Container, Content } from "./styles";
import { ArrowDown, ShoppingCart } from "lucide-react";

import mouseImg from "@/assets/mouse.svg";

export function Product() {
  return (
    <Container>
      <Content to="/">
        <div className="image">
          <img src={mouseImg} alt="Mouse" />
        </div>

        <div className="info">
        <span className="discount">
          <ArrowDown size={12} color="#FFF" /> 55%
        </span>

          <p>G Pro X Superlight</p>
          <div>
            <p>R$ 308,80</p>
            <span>R$ 690,00</span>
          </div>
        </div>
      </Content>

      <button className="add">
        <ShoppingCart color="white" size={16} /> Adicionar
      </button>
    </Container>
  );
}
