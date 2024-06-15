import { Link } from "react-router-dom";
import { Container } from "./styles";
import { ChevronLeft } from "lucide-react";

export function NotFound() {
  return (
    <Container>
      <h1>Página não encontrada.</h1>

      <Link to="/">
        <ChevronLeft size={16} color="white" />
        inicio
      </Link>
    </Container>
  );
}
