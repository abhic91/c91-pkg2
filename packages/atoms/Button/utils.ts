import { css } from "styled-components";
import {
  IButtonAlias,
  ITextSizes,
  ITheme,
  IThemeButtonVariants,
} from "../../design-system/theme/theme.types";
import { IButtonProps } from "./Button.types";

export const generateButtonStyles = (
  btnThemeVariant: keyof IThemeButtonVariants
) => {
  return ({ theme, size }: { theme: ITheme } & IButtonProps) => {
    let buttonFontSize = theme.textAliases?.size[size as ITextSizes];
    return css`
      background-color: ${theme.button?.[btnThemeVariant]?.backgroundColor};
      color: ${theme.button?.[btnThemeVariant]?.textColor};
      box-shadow: ${theme.button?.[btnThemeVariant]?.shadow};
      border: ${theme.button?.[btnThemeVariant]?.borderColor
        ? `1px solid ${theme.button?.[btnThemeVariant]?.borderColor}`
        : "none"};
      font-size: ${buttonFontSize};
      padding: 0.5em 0.875em;
      &:active {
        background-color: ${theme.button?.[btnThemeVariant]
          ?.backgroundColorActive};
        box-shadow: ${theme.button?.[btnThemeVariant]?.shadowHover};
        color: ${theme.button?.[btnThemeVariant]?.textColorActive};
      }
      &:not([disabled]):hover {
        background-color: ${theme.button?.[btnThemeVariant]
          ?.backgroundColorHover};
        box-shadow: ${theme.button?.[btnThemeVariant]?.shadowHover};
        color: ${theme.button?.[btnThemeVariant]?.textColorHover};
        text-decoration: ${theme.button?.[btnThemeVariant]
          ?.textDecorationHover};
      }
      &:focus {
        background-color: ${theme.button?.[btnThemeVariant]
          ?.backgroundColorFocus};
        box-shadow: ${theme.button?.[btnThemeVariant]?.shadow};
        outline: 3px solid
          ${theme.button?.[btnThemeVariant]?.outlineColorOnFocus};
        color: ${theme.button?.[btnThemeVariant]?.textColor};
      }
      &:disabled {
        background-color: ${theme.button?.[btnThemeVariant]
          ?.backgroundColorDisabled};
        box-shadow: none;
        outline: none;
        color: ${theme.button?.[btnThemeVariant]?.textColorDisabled};
      }
    `;
  };
};
