import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { RoutesProvider } from "@/routes";

import { COLORS } from "@/themes";

import { GlobalStyles } from "@/styles/global";

export function App() {
  return (
    <ThemeProvider theme={COLORS}>
      <BrowserRouter>
        <RoutesProvider />
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}
