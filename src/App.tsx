import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { RoutesProvider } from "@/routes";

import { COLORS } from "@/themes";

import { GlobalStyles } from "@/styles/global";
import "@radix-ui/themes/styles.css";

export function App() {
  return (
    <Theme className="teste">
      <ThemeProvider theme={COLORS}>
        <BrowserRouter>
          <RoutesProvider />
          <GlobalStyles />
        </BrowserRouter>
      </ThemeProvider>
    </Theme>
  );
}
