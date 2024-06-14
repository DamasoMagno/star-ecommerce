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
          <Products />
        </section>

        <section className="products">
          <strong>Teclados</strong>
          <Products />
        </section>

        <section className="products">
          <strong>Mouse</strong>
          <Products />
        </section>
      </ProductCategory>
    </>
  );
}
