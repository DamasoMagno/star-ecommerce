import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { ReactNode } from "react";
import { Content, Overlay } from "./styles";
import { Link } from "react-router-dom";

interface MenuProps {
  children: ReactNode;
}

export function Categories({ children }: MenuProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Close>
            <X />
          </Dialog.Close>

          <div className="content">
            <div className="title">
              <Menu /> Departamentos
            </div>

            <nav className="categories">
              <Link to="/category/mouse">Mouses</Link>
              <Link to="/category/teclado">Teclados</Link>
            </nav>
          </div>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
