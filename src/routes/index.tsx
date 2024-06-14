import { Routes, Route } from "react-router-dom";

import { Home } from "@/pages/home";
import { Product } from "@/pages/product";
import { Default } from "@/layout/Default";

export function RoutesProvider() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="" element={<Home />} />
        <Route path="/product/:slug" element={<Product />} />
      </Route>
    </Routes>
  );
}
