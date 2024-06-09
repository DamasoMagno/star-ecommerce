import { Header } from "@/components/header";
import { Products } from "@/pages/home/components/products";

import { ProductCategory } from "./styles";

export function Home() {
  return (
    <>
      <Header />

      <ProductCategory>
        <section className="products">
          <strong>Ofertas</strong>

          <div className="products-list">
            <Products />
          </div>
        </section>
      </ProductCategory>
    </>
  );
}
