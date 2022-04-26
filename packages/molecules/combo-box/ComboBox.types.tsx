import { UseComboboxStateChange } from "downshift";
import { ReactNode } from "react";

export type IDropdownItemProps<T> = {
  isSelected: (selectedItem: T | null, item: T | null) => boolean;
  render: (item: T, selectedItem: T | null) => ReactNode;
};

export type IComboBoxProps<T> = {
  defaultSelectedItem?: T;
  itemToString?: (item: T | null) => string;
  items: T[];
  defaultIsOpen?: boolean;
  onInputValueChange: (changes: UseComboboxStateChange<T>) => void; //TODO: DOWNSHIFT PEER?
  loading?: boolean;
  dropdownItemProps: IDropdownItemProps<T>;
  label?: string;
  placeholder?: string;
  setSelectedItem: (item: T | null) => void;
  errorMessage?: string;
  hintText?: string;
};
