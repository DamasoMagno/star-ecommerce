import { ArrowDown } from "lucide-react";

import { Header } from "@/components/header";

import { Container, Image, Description } from "./styles";

import mouseImg from "@/assets/mouse.svg";

export function Product() {
  return (
    <>
      <Header />

      <Container>
        <Image>
          <img src={mouseImg} alt="Mouse" />
        </Image>

        <Description>
          <div className="product_name">
            <h3>Logitech Mx Master 3s</h3>
            <span>Disponivel em estoque</span>
          </div>

          <div className="product_price">
            <div className="original_price">
              <span className="price">R$ 690,00</span>
              <span className="discount">
                <ArrowDown size={12} color="#FFF" /> 55%
              </span>
            </div>

            <span>R$ 308,80</span>
          </div>

          <div>
            <span>Descrição</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              placeat quis molestias, impedit voluptatem quia culpa harum nobis
              nihil, obcaecati facilis, quaerat neque perspiciatis autem
              architecto? Voluptatem nisi deserunt possimus.
            </p>
          </div>

          <button>Adicionar ao carrinho</button>
        </Description>
      </Container>
    </>
  );
}
