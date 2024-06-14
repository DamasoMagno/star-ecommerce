import { Container, Content } from "./styles";
import { ArrowDown, ShoppingCart } from "lucide-react";

import mouseImg from "@/assets/mouse.svg";

export function Product() {
  return (
    <Container>
      <Content to="/product/oi">
        <div className="image">
          <img src={mouseImg} alt="Mouse" />
        </div>

        <div className="info">
          <p>G Pro X Superlight</p>

          <div className="info_price">
            <div className="original_price">
              <span className="price">de: R$ 690,00</span>
              <span className="discount">
                <ArrowDown size={12} color="#FFF" /> 55%
              </span>
            </div>

            <span>R$ 308,80</span>
          </div>
        </div>
      </Content>

      <button className="add">
        <ShoppingCart color="white" size={16} /> Adicionar
      </button>
    </Container>
  );
}
