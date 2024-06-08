import { Header } from "@/components/header";
import { Product, Products } from "./styles";

import mouseImg from "@/assets/mouse.svg";
import { ArrowDown, ShoppingCart } from "lucide-react";

export function Home() {
  return (
    <div>
      <Header />

      <Products>
        <section className="products">
          <strong>Ofertas</strong>

          <div className="products-list">
            <Product>
              <span className="discount">
                <ArrowDown size={12} color="#FFF" /> 55%
              </span>

              <div className="image">
                <img src={mouseImg} alt="Mouse" />
              </div>

              <div className="info">
                <p>G Pro X Superlight</p>

                <div>
                  <p>R$ 308,80</p>
                  <span>R$ 690,00</span>
                </div>
              </div>

              <button>
                <ShoppingCart color="white" size={16}/> Adicionar
              </button>
            </Product>
          </div>
        </section>
      </Products>
    </div>
  );
}
