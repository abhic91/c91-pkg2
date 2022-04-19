import { HTMLAttributes, HTMLProps } from "react";

export type TextFieldProps = {
  inputTextProps: { id: string } & HTMLProps<HTMLInputElement>;
  labelProps?: HTMLAttributes<HTMLLabelElement>;

  label?: string;
  error?: boolean;
  errorMessage?: string;
  hintText?: string;
};
