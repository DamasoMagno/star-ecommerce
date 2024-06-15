import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div className="content">
        <Link to="/">
          E-<strong>commerce</strong>.
        </Link>

        <div className="filter">
          <button className="menu">
            <Menu />
          </button>

          <div className="search_product">
            <input
              type="text"
              placeholder="Buscar produtos"
              aria-label="Buscar produtos"
            />
            <Search />
          </div>
        </div>

        <nav className="navigation">
          <button aria-label="Carrinho">
            <ShoppingCart />
          </button>
          <button aria-label="Usuário">
            <User />
          </button>
        </nav>
      </div>
    </Container>
  );
}
