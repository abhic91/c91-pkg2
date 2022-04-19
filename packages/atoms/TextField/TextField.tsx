import { TextFieldProps } from "./TextField.types";
import React from "react";
import styled, { css } from "styled-components";
import { ITheme } from "../../design-system/theme/theme.types";

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  ${({ theme }: { theme: ITheme }) => css`
    color: ${theme.textField?.labelTextColor};
    font-size: ${theme.textField?.labelFontSize};
    font-weight: ${theme.textField?.labelFontWeight};
  `};
`;

const TextField = ({
  label,
  inputTextProps: { id, value, onChange, ...inputTextProps },
  ...others
}: TextFieldProps) => {
  console.log(onChange, value);
  return (
    <div>
      {label && (
        <StyledLabel htmlFor={id} {...others.labelProps}>
          {label}
        </StyledLabel>
      )}
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange && onChange(e)}
          id={id}
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
