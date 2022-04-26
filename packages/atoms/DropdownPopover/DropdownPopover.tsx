import { ITheme } from "@abhic91/design-system";
import styled, { css } from "styled-components";
import React, { forwardRef, RefObject } from "react";

const StyledDropdownPopover = styled.div`
  ${({ theme }: { theme: ITheme }) => css`
    background-color: ${theme.dropdownPopover?.backgroundColor};
    border-color: ${theme.dropdownPopover?.borderColor};
    border-radius: ${theme.dropdownPopover?.borderRadius};
    box-shadow: ${theme.dropdownPopover?.shadow};
    opacity: 0;
    transform: translateY(-30px);
    transition: transform 160ms ease-in-out, opacity 280ms ease-in-out;
    overflow: hidden;
  `}

  &.visible {
    opacity: 1;
    transform: translateY(0px);
    overflow: scroll;
  }
`;
type IDropdownPopoverProps = {
  as: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  isVisible: boolean;
};
const DropdownPopover = forwardRef<HTMLDivElement, IDropdownPopoverProps>(
  (props, ref) => (
    <StyledDropdownPopover
      className={props.isVisible ? "visible" : "invisible"}
      as={props.as}
      ref={ref}
    >
      {props.children}
    </StyledDropdownPopover>
  )
);

export default DropdownPopover;
