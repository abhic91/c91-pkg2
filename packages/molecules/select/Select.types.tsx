import { ReactNode } from "react";

export type ISelectDropdownItemProps<T> = {
  isSelected: (selectedItem: T | null, item: T | null) => boolean;
  render: (item: T, selectedItem: T | null) => ReactNode;
};

export type ISelectDropdownProps<T> = {
  defaultSelectedItem?: T;
  itemToString?: (item: T | null) => string;
  items: T[];
  defaultIsOpen?: boolean;
  loading?: boolean;
  dropdownItemProps: ISelectDropdownItemProps<T>;
  label?: string;
  setSelectedItem: (item: T | null) => void;
  btnTextWhenUnselected?: string;
  errorMessage?: string;
  hintText?: string;
};
