import { Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

import { Header } from "./styles";

export function Home() {
  return (
    <div>
      <Header>
        <div>
          <Link to="/">New<strong>Byte</strong></Link>

          <div>
            <input type="text" />
            <Search />
          </div>

          <nav>
            <button>
              <ShoppingCart size={14} color="#FFF" />
            </button>
            <button>
              <User size={14} color="#FFF" />
            </button>
          </nav>
        </div>
      </Header>

      <section>
        <strong>Ofertas</strong>

        <div>
          <img src="" alt="" />
          <div>
            <p>G Pro X Superlight</p>
            <p>R$ 308,80</p>
            <span>R$ 690,00</span>
          </div>
        </div>
      </section>
    </div>
  );
}
