import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { createTheme } from "@abhic91/design-system";

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
    const theme = createTheme("violet", "gray");
    const GlobalStyles = createGlobalStyle`
      *{padding: 0; margin: 0; box-sizing: border-box;}
      ul{ list-style: none}
    `;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    );
  },
];
