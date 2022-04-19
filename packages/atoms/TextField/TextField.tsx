import { ITextFieldProps } from "./TextField.types";
import React from "react";
import styled, { css } from "styled-components";
import type { ITheme } from "@abhic91/design-system";

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  ${({ theme }: { theme: ITheme }) => css`
    color: ${theme.textField?.labelTextColor};
    font-size: ${theme.textField?.labelFontSize};
    font-weight: ${theme.textField?.labelFontWeight};
  `};
`;

const StyledInputText = styled.input`
  ${({
    theme,
    error,
  }: { theme: ITheme } & ITextFieldProps["inputTextProps"]) => css`
    width: 100%;
    border-radius: ${theme.textField?.borderRadius};
    padding: ${theme.textField?.padding};
    border: 1px solid
      ${error
        ? theme.textField?.errorBorderColor
        : theme.textField?.borderColor};

    box-shadow: ${theme.textField?.shadow};
    &::placeholder {
      color: ${theme.textField?.placeholderColor};
    }
    &:focus {
      outline: 3px solid
        ${error
          ? theme.textField?.errorOutlineColorOnFocus
          : theme.textField?.outlineColorOnFocus};

      border: 1px solid
        ${error
          ? theme.textField?.errorBorderColor
          : theme.textField?.borderColorFocus};
    }
  `};
`;

const TextField = ({
  label,
  inputTextProps: { id, value, onChange, ...inputTextProps },
  error,
  ...others
}: ITextFieldProps) => {
  return (
    <div>
      {label && (
        <StyledLabel htmlFor={id} {...others.labelProps}>
          {label}
        </StyledLabel>
      )}
      <div>
        <StyledInputText
          error={error}
          placeholder={inputTextProps.placeholder}
          {...inputTextProps}
        />
      </div>
    </div>
  );
};

TextField.defaultProps = {
  inputTextProps: { id: "default-text-field" },
};

export default TextField;
