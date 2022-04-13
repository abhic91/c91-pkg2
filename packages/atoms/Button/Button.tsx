import { IButtonProps } from "./Button.types";
import styled, { css, ThemeProvider, useTheme } from "styled-components";
import { ITheme } from "../theme/theme.types";
import { theme } from "../theme/defaultTheme";
import colors from "@abhic91/colors";
import React from "react";

const DefaultStyledButton = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px 14px;
  ${({ theme, variant }: { theme: ITheme } & IButtonProps) => {
    switch (variant) {
      case "contained":
        const colorName = theme.colors.themePalette.primary
          .colorName as keyof typeof colors;
        return css`
          background-color: ${theme.colors.themePalette.primary.main};
          color: ${theme.colors.themePalette.primary.contrastTextMain};
          box-shadow: 0px 1px 2px ${colors[colorName][700]};
          &:active {
            background-color: ${colors[colorName][800]};
            box-shadow: 0px 1px 1px ${colors[colorName][800]};
          }
          &:hover {
            background-color: ${colors[colorName][700]};
          }
        `;
    }
  }}
`;

const Button = (props: IButtonProps) => {
  console.log(useTheme(), "THE T");
  return <DefaultStyledButton {...props}>{props.children}</DefaultStyledButton>;
};

Button.defaultProps = {
  type: "button",
  variant: "contained",
  color: "primary",
  size: "md",
} as IButtonProps;

export default Button;
