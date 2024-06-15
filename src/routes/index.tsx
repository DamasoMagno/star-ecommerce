import { Routes, Route } from "react-router-dom";

// Layouts
import { Default } from "@/layout/Default";

// Pages
import { Home } from "@/pages/home";
import { Product } from "@/pages/product";
import { Category } from "@/pages/category";

export function RoutesProvider() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="" element={<Home />} />
        <Route path="/product/:slug" element={<Product />} />
        {/* <Route path="/category/:category" element={<Category />} /> */}
      </Route>
    </Routes>
  );
}
