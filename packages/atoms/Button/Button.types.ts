import { HTMLAttributes, ReactNode } from "react";
import type { ITextSizes } from "@abhic91/design-system";

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
    | "neutral-text-only"
    | "error-contained"
    | "error-light"
    | "error-outlined"
    | "error-text-only"
    | "error-link";

  children?: ReactNode;
  disabled?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  iconOnly?: boolean;
  as?: keyof JSX.IntrinsicElements;
};
