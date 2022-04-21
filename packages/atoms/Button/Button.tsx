import { IButtonProps } from "./Button.types";
import styled from "styled-components";
import { generateButtonStyles } from "./utils";

import React from "react";
import type { ITheme } from "@abhic91/design-system/";

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  ${({ variant }: { theme: ITheme } & IButtonProps) => {
    switch (variant) {
      case "primary-contained":
        return generateButtonStyles("primaryContained");

      case "primary-light": {
        return generateButtonStyles("primaryLight");
      }
      case "primary-text-only": {
        return generateButtonStyles("primaryTextOnly");
      }
      case "primary-link": {
        return generateButtonStyles("primaryLink");
      }
      case "neutral-outlined": {
        return generateButtonStyles("neutralOutlined");
      }
      case "neutral-link": {
        return generateButtonStyles("neutralLink");
      }
      case "error-contained": {
        return generateButtonStyles("errorContained");
      }
      case "error-light": {
        return generateButtonStyles("errorLight");
      }
      case "error-outlined": {
        return generateButtonStyles("errorOutlined");
      }
      case "error-text-only": {
        return generateButtonStyles("errorTextOnly");
      }
      case "error-link": {
        return generateButtonStyles("errorLink");
      }
    }
  }}
`;

const Button = (props: IButtonProps) => {
  return (
    <StyledButton data-testid="button" {...props}>
      {props.children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  variant: "primary-contained",
  color: "primary",
  size: "sm",
} as IButtonProps;

export default Button;
