import { useCombobox, UseComboboxStateChange } from "downshift";

import React from "react";
import { Button, TextField } from "@abhic91/atoms";
import { ChevronDown } from "../Icons";
import { DropdownPopover } from "@abhic91/atoms";
import styled, { css } from "styled-components";
import { ITheme } from "@abhic91/design-system";
import { IComboBoxProps } from "./ComboBox.types";

const StyledRotater = styled.span`
  ${(props: { isOpen: boolean }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease-in-out;
    `;
  }}
  &.rotate-180 {
    transform: rotate(180deg);
  }
`;

const StyledDropdownItem = styled.li`
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: { theme: ITheme }) =>
    props.theme.colorAliases?.neutralBgColor};
  color: ${(props: { theme: ITheme }) =>
    props.theme.colorAliases?.neutralTextColor};

  &:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  ${({
    isSelected,
    theme,
  }: {
    isSelected: boolean;
    isHighlighted: boolean;
    theme: ITheme;
  }) => {
    return css`
      background-color: ${isSelected
        ? theme.colorAliases?.neutralBgColorSaturated
        : theme.colorAliases?.neutralBgColor};
    `;
  }};
  ${({ isHighlighted, theme }: { isHighlighted: boolean; theme: ITheme }) => {
    return css`
      background-color: ${isHighlighted
        ? theme.colorAliases?.primaryBgLight
        : theme.colorAliases?.neutralBgColor};
      color: theme.colorAliases?.neutralTextColor;
    `;
  }};
`;
//TODO: async get items with debounce, pagination, etc.
function DropdownCombobox<T>({
  onInputValueChange,
  itemToString,
  items,
  loading, //TODO: LOADING ICON
  defaultIsOpen,
  defaultSelectedItem,
  dropdownItemProps,
  label,
  placeholder,
  errorMessage,
  setSelectedItem,
  hintText,
}: IComboBoxProps<T>) {
  // const items = [
  //   { id: "1", name: "one" },
  //   { id: "2", name: "two" },
  //   { id: "3", name: "o" },
  //   { id: "4", name: "on" },
  // ];
  // const [inputItems, setInputItems] = useState(items);
  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getToggleButtonProps,
    toggleMenu,
    getItemProps,
    selectedItem,
    highlightedIndex,
    selectItem,
  } = useCombobox({
    items: items,
    defaultIsOpen,
    // stateReducer,
    defaultSelectedItem: defaultSelectedItem,
    onSelectedItemChange: (changes: UseComboboxStateChange<T>) => {
      setSelectedItem(changes.selectedItem!);
      selectItem(changes.selectedItem!);
    },
    onInputValueChange,
    // ({ inputValue }) => {
    //   inputValue
    //     ? setInputItems(
    //         items.filter((item) =>
    //           item.name.toLowerCase().includes(inputValue?.toLowerCase())
    //         )
    //       )
    //     : setInputItems(items);
    // },
    itemToString,
  });

  return (
    <div>
      <div {...getComboboxProps()}>
        <TextField
          labelProps={{ ...getLabelProps() }}
          inputTextProps={{
            ...getInputProps({
              onFocus: () => !isOpen && toggleMenu(),
              placeholder,
            }),
          }}
          label={label}
          trailingInputAdornment={
            <Button
              onClick={toggleMenu}
              variant="neutral-text-only"
              aria-label="toggle dropdown"
            >
              <StyledRotater
                isOpen={isOpen}
                className={isOpen ? "rotate-180" : ""}
              >
                <ChevronDown />
              </StyledRotater>
            </Button>
          }
          errorMessage={errorMessage}
          hintText={hintText}
        />
      </div>
      <DropdownPopover {...getMenuProps()} as="ul" isVisible={isOpen}>
        {isOpen &&
          items.map((item, index) => (
            <StyledDropdownItem
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
              isSelected={dropdownItemProps.isSelected(selectedItem, item)}
              isHighlighted={highlightedIndex === index}
            >
              {dropdownItemProps.render(item, selectedItem)}
            </StyledDropdownItem>
          ))}
      </DropdownPopover>
    </div>
  );
}
export default DropdownCombobox;
