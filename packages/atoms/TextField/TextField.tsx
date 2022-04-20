import { IInputTextProps, ITextFieldProps } from "./TextField.types";
import React, { useEffect, useRef, useState } from "react";
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

const StyledInputText = styled.input<{
  paddingLeft?: string;
  paddingRight?: string;
}>`
  ${({
    theme,
    error,
    paddingLeft,
    paddingRight,
  }: { theme: ITheme } & IInputTextProps) => css`
    width: 100%;
    border-radius: ${theme.textField?.borderRadius};
    padding: ${theme.textField?.padding};
    padding-left: ${paddingLeft};
    padding-right: ${paddingRight};
    font-size: ${theme.textField?.textFontSize};
    border: 1px solid
      ${error
        ? theme.textField?.errorBorderColor
        : theme.textField?.borderColor};

    box-shadow: ${theme.textField?.shadow};
    &::placeholder {
      color: ${theme.textField?.placeholderColor};
      font-size: ${theme.textField?.placeholderFontSize};
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
    &:disabled {
      box-shadow: none;
      cursor: not-allowed;
      &::placeholder {
        color: ${theme.textField?.placeholderColorDisabled};
      }
    }
  `};
`;

const StyledInputTextBoxWrapper = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledHelperText = styled.p`
  ${({ theme, error }: { theme: ITheme } & { error: boolean }) => css`
    color: ${error
      ? theme.textField?.errorTextColor
      : theme.textField?.hintTextColor};
    font-size: ${theme.textField?.hintFontSize};
    margin-top: 0.4rem; //TODO: VERIFY IF OK
    margin-left: 0.15rem;
    font-weight: ${theme.textField?.hintFontWeight};
  `}
`;

const StyledLeadingAdornmentWrapper = styled.div`
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 10px;
`;
const StyledTrailingAdornmentWrapper = styled.div`
  background-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
`;

const TextField = ({
  label,
  inputTextProps: { id, value, onChange, ...inputTextProps },
  error,
  hintText,
  errorMessage,
  leadingInputAdornment,
  trailingInputAdornment,
  ...others
}: ITextFieldProps) => {
  const [inputPaddingLeft, setInputPaddingLeft] = useState("10px");
  const [inputPaddingRight, setInputPaddingRight] = useState("10px");
  const leadingAdornmentWrapperRef = useRef<HTMLDivElement | null>(null);
  const trailingAdornmentWrapperRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (leadingInputAdornment) {
      setInputPaddingLeft(
        `${(leadingAdornmentWrapperRef.current?.clientWidth || 0) + 15}px`
      );
    }
    if (trailingInputAdornment) {
      setInputPaddingRight(
        `${(trailingAdornmentWrapperRef.current?.clientWidth || 0) + 15}px`
      );
    }
  }, [leadingInputAdornment, trailingInputAdornment]);
  return (
    <div>
      {label && (
        <StyledLabel htmlFor={id} {...others.labelProps}>
          {label}
        </StyledLabel>
      )}
      <StyledInputTextBoxWrapper>
        {leadingInputAdornment && (
          <StyledLeadingAdornmentWrapper ref={leadingAdornmentWrapperRef}>
            {leadingInputAdornment}
          </StyledLeadingAdornmentWrapper>
        )}
        <StyledInputText
          error={error}
          {...inputTextProps}
          paddingLeft={inputPaddingLeft}
          paddingRight={inputPaddingRight}
        />
        {trailingInputAdornment && (
          <StyledTrailingAdornmentWrapper ref={trailingAdornmentWrapperRef}>
            {trailingInputAdornment}
          </StyledTrailingAdornmentWrapper>
        )}
      </StyledInputTextBoxWrapper>
      {(hintText || errorMessage) && (
        <StyledHelperText error={Boolean(error)}>
          {errorMessage || hintText}
        </StyledHelperText>
      )}
    </div>
  );
};

TextField.defaultProps = {
  inputTextProps: { id: "default-text-field" },
};

export default TextField;
