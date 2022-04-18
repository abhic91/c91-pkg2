import { HTMLAttributes, ReactNode } from "react";
import { ITextAlias, ITextSizes } from "../../design-system/theme/theme.types";

export type IButtonProps = HTMLAttributes<HTMLButtonElement> & {
  size?: ITextSizes;
  variant?:
    | "primary-outlined"
    | "primary-contained"
    | "primary-text-only"
    | "primary-link"
    | "primary-light"
    | "neutral-outlined"
    | "neutral-link"
    | "error-contained"
    | "error-light"
    | "error-outlined"
    | "error-text-only"
    | "error-link";

  children?: ReactNode;
  disabled?: boolean;
};
