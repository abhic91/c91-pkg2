import { HTMLAttributes, ReactNode } from "react";
import { ITextAlias, ITextSizes } from "../../design-system/theme/theme.types";

export type IButtonProps = HTMLAttributes<HTMLButtonElement> & {
  size?: ITextSizes;
  variant?:
    | "outlined"
    | "contained"
    | "primary-text-only"
    | "primary-link"
    | "semi-transparent"
    | "neutral-outlined";
  children?: ReactNode;
};
