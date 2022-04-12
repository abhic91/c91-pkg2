import { ITheme } from "./theme.types";

export const colors = {
  gray: {
    0: "#ffffff",
    25: "#fafafa",
    50: "#f8f8f8",
    100: "#f3f3f4",
    200: "#e6e6e8",
    300: "#b5b5ba",
    400: "#83838c",
    500: "#6a6a75",
    600: "#51515e",
    700: "#393947",
    800: "#202030",
    900: "#070719",
  } as const,
  violet: {
    25: "#fcfbff",
    50: "#f9f8ff",
    100: "#f3f0ff",
    200: "#e2daff",
    300: "#c5b4fe",
    400: "#a88ffe",
    500: "#8b69fd",
    600: "#7d57fd",
    700: "#6E44FD",
    800: "#5836ca",
    900: "#37227f",
  } as const,
  red: {
    25: "#FFFBFA",
    50: "#FEF3F2",
    100: "#FEE4E2",
    200: "#FECDCA",
    300: "#FDA29B",
    400: "#F97066",
    500: "#F04438",
    600: "#D92D20",
    700: "#B42318",
    800: "#912018",
    900: "#7A271A",
  } as const,
} as const;

export const theme: ITheme = {
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
