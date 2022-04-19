import { HTMLAttributes, HTMLProps, InputHTMLAttributes } from "react";

export type ITextFieldProps = {
  inputTextProps: { error?: boolean } & InputHTMLAttributes<HTMLInputElement>;
  labelProps?: HTMLAttributes<HTMLLabelElement>;

  label?: string;
  error?: boolean;
  errorMessage?: string;
  hintText?: string;
};
