import { IButtonProps } from "./Button.types";
import styled from "styled-components";
import { generateButtonStyles } from "./utils";

import React, { forwardRef } from "react";
import type { ITheme } from "@abhic91/design-system/";

const StyledButton = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      case "neutral-text-only": {
        return generateButtonStyles("neutralTextOnly");
      }
    }
  }}
`;

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ as, ...props }: IButtonProps, ref) => {
    return (
      <StyledButton data-testid="button" {...props} ref={ref} as={as}>
        {props.leadingIcon && <span>{props.leadingIcon}</span>}
        {props.children}
        {props.trailingIcon && <span>{props.trailingIcon}</span>}
      </StyledButton>
    );
  }
);

Button.defaultProps = {
  type: "button",
  variant: "primary-contained",
  color: "primary",
  size: "sm",
} as IButtonProps;

export default Button;
