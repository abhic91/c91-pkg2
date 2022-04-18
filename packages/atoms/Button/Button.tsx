import { IButtonProps } from "./Button.types";
import styled, { css } from "styled-components";
import React from "react";
import { ITheme } from "../../design-system/theme/theme.types";
import { generateButtonStyles } from "./utils";

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  border-radius: 8px;
  &:disabled {
    cursor: not-allowed;
  }
  ${({ variant }: { theme: ITheme } & IButtonProps) => {
    switch (variant) {
      case "contained":
        return css(generateButtonStyles("primaryContained"));

      case "semi-transparent": {
        return css(generateButtonStyles("semiTransparent"));
      }
      case "primary-text-only": {
        return css(generateButtonStyles("primaryTextOnly"));
      }
      case "primary-link": {
        return css(generateButtonStyles("primaryLink"));
      }
    }
  }}
`;

const Button = (props: IButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

Button.defaultProps = {
  type: "button",
  variant: "contained",
  color: "primary",
  size: "md",
} as IButtonProps;

export default Button;
