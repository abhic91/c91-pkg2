import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import getCommonComponentSettings from "../packages/atoms/component-settings/ComponentSettings";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const defaultTheme = createTheme({});
    const theme = createTheme(
      defaultTheme,
      getCommonComponentSettings(defaultTheme, "sans-serif")
    );
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
];
