import "styled-components"

import { Colors } from "../themes/index"

type ColorsTheme = typeof Colors

declare module "styled-components" {
  export interface DefaultTheme extends ColorsTheme {}
}