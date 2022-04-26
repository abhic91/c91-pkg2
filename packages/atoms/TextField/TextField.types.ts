import { HTMLAttributes, HTMLProps, InputHTMLAttributes } from "react";

export type IInputTextProps = {
  error?: boolean;
  paddingLeft?: string;
  paddingRight?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type ITextFieldProps = {
  inputTextProps: IInputTextProps;
  labelProps?: HTMLAttributes<HTMLLabelElement>;

  label?: string;
  errorMessage?: string;
  hintText?: string;

  leadingInputAdornment?: string | React.ReactNode;
  trailingInputAdornment?: string | React.ReactNode[] | React.ReactNode;
};
