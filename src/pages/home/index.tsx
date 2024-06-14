import { Products } from "@/pages/home/components/products";

import { ProductCategory } from "./styles";

const popularCategories = [
  {
    id: crypto.randomUUID(),
    name: "Ofertas",
    products: Array.from({ length: 12 }).map((_, i) => i + 1),
  },
  {
    id: crypto.randomUUID(),
    name: "Teclados",
    products: Array.from({ length: 12 }).map((_, i) => i + 1),
  },
  {
    id: crypto.randomUUID(),
    name: "Mouses",
    products: Array.from({ length: 12 }).map((_, i) => i + 1),
  },
];

export function Home() {
  return (
    <ProductCategory>
      {popularCategories.map((category) => (
        <section className="products" key={category.id}>
          <strong>{category.name}</strong>
          <Products />
        </section>
      ))}
    </ProductCategory>
  );
}
