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
      case "primary-contained":
        return css(generateButtonStyles("primaryContained"));

      case "primary-light": {
        return css(generateButtonStyles("primaryLight"));
      }
      case "primary-text-only": {
        return css(generateButtonStyles("primaryTextOnly"));
      }
      case "primary-link": {
        return css(generateButtonStyles("primaryLink"));
      }
      case "neutral-outlined": {
        return css(generateButtonStyles("neutralOutlined"));
      }
      case "neutral-link": {
        return css(generateButtonStyles("neutralLink"));
      }
      case "error-contained": {
        return css(generateButtonStyles("errorContained"));
      }
      case "error-light": {
        return css(generateButtonStyles("errorLight"));
      }
      case "error-outlined": {
        return css(generateButtonStyles("errorOutlined"));
      }
      case "error-text-only": {
        return css(generateButtonStyles("errorTextOnly"));
      }
      case "error-link": {
        return css(generateButtonStyles("errorLink"));
      }
    }
  }}
`;

const Button = (props: IButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

Button.defaultProps = {
  type: "button",
  variant: "primary-contained",
  color: "primary",
  size: "md",
} as IButtonProps;

export default Button;
