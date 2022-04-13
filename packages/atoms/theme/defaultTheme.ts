import { ITheme } from "./theme.types";
import colors from "@abhic91/colors";

export const theme = {
  colors: {
    themePalette: {
      primary: {
        main: colors.violet[600],
        light: colors.violet[50],
        contrastTextMain: "#ffffff",
        contrastTextLight: colors.violet[600],
        colorName: "violet",
      },
      secondary: {
        main: "#FFFFFF",
        contrastTextMain: colors.gray[700],
        colorName: "gray",
      },
      error: {
        main: colors.red[600],
        light: colors.red[50],
        contrastTextMain: "#ffffff",
        contrastTextLight: "#ffffff",
        colorName: "red",
      },
    },
  },
};
