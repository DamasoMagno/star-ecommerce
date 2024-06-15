import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div className="content">
        <Link to="/">
          E-<strong>commerce</strong>.
        </Link>

        <div className="search_product">
          <input
            type="text"
            placeholder="Buscar produtos"
            aria-label="Buscar produtos"
          />
          <Search />
        </div>

        <nav className="navigation">
          <button aria-label="Carrinho">
            <ShoppingCart size={14} color="#FFF" />
          </button>
          <button aria-label="Usuário">
            <User size={14} color="#FFF" />
          </button>
        </nav>
      </div>
    </Container>
  );
}
