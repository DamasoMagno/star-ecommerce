import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div className="content">
        <Link to="/">
          New<strong>Byte</strong>
        </Link>

        <div className="search-product">
          <input type="text" placeholder="Buscar produtos"/>
          <Search />
        </div>

        <nav className="navigation">
          <button>
            <ShoppingCart size={14} color="#FFF" />
          </button>
          <button>
            <User size={14} color="#FFF" />
          </button>
        </nav>
      </div>
    </Container>
  );
}
