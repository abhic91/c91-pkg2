import colors from "./colors/colors";

import {
  createColorAliases,
  createShadowAlias,
  createTheme,
} from "./theme/theme";

export type {
  IButtonAlias,
  IColorAliases,
  IFontWeightRanges,
  IShadowAlias,
  ITextAlias,
  ITextFieldSettings,
  ITextSizes,
  ITheme,
  IThemeButtonVariants,
} from "./theme/theme.types";

export { colors, createColorAliases, createShadowAlias, createTheme };
