import { useCallback, useEffect, useState } from "react";
import { Search, ShoppingCart, User, X } from "lucide-react";
import { Link } from "react-router-dom";

import { Container, SearchProduct } from "./styles";

export function Header() {
  const [visible, setVisible] = useState(false);

  const handleKeyUp = useCallback(() => {
    (e: { key: string }) => {
      if (e.key === "Escape") {
        setVisible(false);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      window.addEventListener("keyup", handleKeyUp);
    }

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp, visible]);

  return (
    <Container>
      <div className="content">
        <Link to="/">
          E-<strong>commerce</strong>.
        </Link>

        <SearchProduct visible={visible}>
          <div className="search_product">
            <input
              type="text"
              placeholder="Buscar produtos"
              aria-label="Buscar produtos"
              autoFocus={visible}
            />
            <Search />

            <button onClick={() => setVisible(false)} aria-label="Fechar busca">
              <X />
            </button>
          </div>

          <button
            onClick={() => setVisible(true)}
            className="open_search"
            aria-label="Abrir busca"
          >
            <Search />
          </button>
        </SearchProduct>

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
