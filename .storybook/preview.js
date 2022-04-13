import React from "react";
import { ThemeProvider } from "styled-components";
import { createTheme } from "../packages/atoms/theme/defaultTheme";

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
    const theme = createTheme("violet", "gray", {
      button: { primaryContained: { backgroundColor: "gray" } },
    });
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
];
