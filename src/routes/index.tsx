import { Routes, Route } from "react-router-dom";

import { Home } from "@/pages/home";
import { Product } from "@/pages/product";

export function RoutesProvider() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:slug" element={<Product />} />
    </Routes>
  );
}
