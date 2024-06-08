import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { RoutesProvider } from "./routes";
import { Colors } from "./themes";

export function App() {
  return (
    <ThemeProvider theme={Colors}>
      <BrowserRouter>
        <RoutesProvider />
      </BrowserRouter>
    </ThemeProvider>
  );
}
