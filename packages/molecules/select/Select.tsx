import { useSelect, UseSelectStateChange } from "downshift";

import React from "react";
import { Button } from "@abhic91/atoms";
import { ChevronDown } from "../Icons";
import { DropdownPopover } from "@abhic91/atoms";
import styled, { css } from "styled-components";
import { ITheme } from "@abhic91/design-system";
import { ISelectDropdownProps } from "./Select.types";

const StyledRotater = styled.span`
  ${(props: { isOpen: boolean }) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotate(${props.isOpen ? 180 : 0}deg);
      transition: transform 0.2s ease-in-out;
    `;
  }}
`;

const StyledSelectButton = styled(Button)`
  ${(props: { error: boolean; theme: ITheme; iconOnly: boolean }) => {
    return css`
      min-width: 100px;
      border: 1px solid
        ${props.error
          ? props.theme.colorAliases?.errorBorderColor
          : props.theme.colorAliases?.neutralBorderColor};

      &:active,
      &:focus {
        outline: 3px solid
          ${props.error
            ? props.theme.colorAliases?.errorLightOutlinedColor
            : props.theme.colorAliases
                ?.neutralOutlineColor}; //TODO: use aliases
      }
    `;
  }}
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
const StyledHintText = styled.p`
  ${({ theme, error }: { theme: ITheme } & { error: boolean }) => css`
    color: ${error
      ? theme.textField?.errorTextColor
      : theme.textField?.hintTextColor};
    font-size: ${theme.textField?.hintFontSize};
    margin-top: 0.4rem; //TODO: VERIFY IF OK
    margin-left: 0.15rem;
    font-weight: ${theme.textField
      ?.hintFontWeight}; //TODO: USE ALIASES OF SELECT
  `}
`;
const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.25rem;
  ${({ theme }: { theme: ITheme }) => css`
    color: ${theme.textField?.labelTextColor}; //TODO: USE ALIASES OF SELECT
    font-size: ${theme.textField?.labelFontSize};
    font-weight: ${theme.textField?.labelFontWeight};
  `};
`;
function SelectDropdown<T>({
  itemToString,
  items,
  loading, //TODO: LOADING ICON
  defaultIsOpen,
  defaultSelectedItem,
  dropdownItemProps,
  label,
  errorMessage,
  setSelectedItem,
  btnTextWhenUnselected,
  hintText,
}: ISelectDropdownProps<T>) {
  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    getItemProps,
    selectedItem,
    highlightedIndex,
    selectItem,
  } = useSelect({
    items: items,
    defaultIsOpen,
    // stateReducer,
    defaultSelectedItem: defaultSelectedItem,
    onSelectedItemChange: (changes: UseSelectStateChange<T>) => {
      setSelectedItem(changes.selectedItem!);
      selectItem(changes.selectedItem!);
    },
    itemToString,
  });

  return (
    <div>
      <div>
        <div>
          {label && <StyledLabel {...getLabelProps()}>{label}</StyledLabel>}
        </div>
        <StyledSelectButton
          type="button"
          variant={"neutral-outlined"}
          {...getToggleButtonProps()}
          error={Boolean(errorMessage)}
          trailingIcon={
            <StyledRotater isOpen={isOpen}>
              <ChevronDown />
            </StyledRotater>
          }
        >
          {selectedItem
            ? itemToString?.(selectedItem) || selectedItem
            : btnTextWhenUnselected || "Select"}
        </StyledSelectButton>
        {(errorMessage || hintText) && (
          <StyledHintText error={Boolean(errorMessage)}>
            {errorMessage || hintText}
          </StyledHintText>
        )}
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
export default SelectDropdown;
