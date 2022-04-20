import { HTMLAttributes, HTMLProps, InputHTMLAttributes } from "react";

export type ITextFieldProps = {
  inputTextProps: {
    error?: boolean;
    paddingLeft: string;
    paddingRight: string;
  } & InputHTMLAttributes<HTMLInputElement>;
  labelProps?: HTMLAttributes<HTMLLabelElement>;

  label?: string;
  error?: boolean;
  errorMessage?: string;
  hintText?: string;

  leadingInputAdornment?: string | React.ReactNode;
  trailingInputAdornment?: string | React.ReactNode[] | React.ReactNode;
  [key: string]: any;
};
