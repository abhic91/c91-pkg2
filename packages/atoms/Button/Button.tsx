import { IButtonProps } from "./Button.types";
import styled, { css, ThemeProvider, useTheme } from "styled-components";
import React from "react";
import { ITheme } from "../theme/defaultTheme";

const DefaultStyledButton = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px 14px;
  ${({ theme, variant }: { theme: ITheme } & IButtonProps) => {
    switch (variant) {
      case "contained":
        return css`
          background-color: ${theme.button?.primaryContained?.backgroundColor};
          color: ${theme.button?.primaryContained?.textColor};
          box-shadow: ${theme.button?.primaryContained?.shadow};
          &:active {
            background-color: ${theme.button?.primaryContained
              ?.backgroundColorActive};
            box-shadow: 0px 1px 1px
              ${theme.button?.primaryContained?.shadowHover};
          }
          &:hover {
            background-color: ${theme.button?.primaryContained
              ?.backgroundColorHover};
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
