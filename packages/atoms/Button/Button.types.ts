import { HTMLAttributes, ReactNode } from "react";

export type IButtonProps = HTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  color?: "primary" | "secondary" | "danger";
  variant?: "outlined" | "contained" | "text" | "link" | "lighter-contained";
  children?: ReactNode;
};
