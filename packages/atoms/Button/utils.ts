import { css } from "styled-components";
import type {
  ITextSizes,
  ITheme,
  IThemeButtonVariants,
} from "@abhic91/design-system";
import { IButtonProps } from "./Button.types";

export const generateButtonStyles = (
  btnThemeVariant: keyof IThemeButtonVariants
) => {
  return ({ theme, size, iconOnly }: { theme: ITheme } & IButtonProps) => {
    let buttonFontSize = theme.textAliases?.size[size as ITextSizes];
    return css`
      background-color: ${theme.button?.[btnThemeVariant]?.backgroundColor};
      color: ${theme.button?.[btnThemeVariant]?.textColor};
      box-shadow: ${theme.button?.[btnThemeVariant]?.shadow};
      border: ${theme.button?.[btnThemeVariant]?.borderColor
        ? `1px solid ${theme.button?.[btnThemeVariant]?.borderColor}`
        : "none"};
      border-radius: ${theme.button?.[btnThemeVariant]?.borderRadius};
      aspect-ratio: ${iconOnly ? "1" : "auto"};
      font-size: ${buttonFontSize};
      padding: ${iconOnly ? "1em" : "0.625em 1em"};
      &:active {
        background-color: ${theme.button?.[btnThemeVariant]
          ?.backgroundColorActive};
        box-shadow: ${theme.button?.[btnThemeVariant]?.shadowHover};
        color: ${theme.button?.[btnThemeVariant]?.textColorActive};
        text-decoration: ${theme.button?.[btnThemeVariant]
          ?.textDecorationHover};
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
        color: ${theme.button?.[btnThemeVariant]?.textColorActive};
        text-decoration: ${theme.button?.[btnThemeVariant]
          ?.textDecorationHover};
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
