import { IModalProps } from "./Modal.types";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "@abhic91/atoms";

const OverlayShowAnimation = keyframes`
    0% {opacity: 0}
    50% {opacity: 0.5}
    100% {opacity: 1}
`;

const ContentShowAnimation = keyframes`
    0% { opacity: 0; transform: translateY(-150%) scale(.6) };
    50% { opacity: 0.4; };
  100% { opacity: 1;  transform: translateY(0%) scale(1) };
`;
//TODO: USE ALIAS
const StyledOverlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  animation: ${OverlayShowAnimation} 0.2s ease-in forwards; //TODO: media prefers reduced motion?
  background-color: #00000088;
`;

const StyledContent = styled(DialogPrimitive.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  animation: ${ContentShowAnimation} 0.2s ease-in forwards;
  box-shadow: 0px 1px 2px #7d57fd;
  background-color: white;
  padding: 1.5rem;
  transform-origin: center;
`;

const StyledTitle = styled(DialogPrimitive.Title)`
  margin-bottom: 1rem;
`;

const StyledDesciption = styled(DialogPrimitive.Description)``;

const StyledCloseButtonWrapper = styled(DialogPrimitive.DialogClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const Modal = ({
  noBackdrop,
  dialogTitle,
  dialogDescription,
  isOpen,
  noCloseBtn,
  children,
  DialogTrigger,
}: IModalProps) => {
  return (
    <DialogPrimitive.Root open={isOpen}>
      <DialogPrimitive.Trigger asChild>{DialogTrigger}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        {!noBackdrop && <StyledOverlay />}
        <StyledContent>
          {dialogTitle && <StyledTitle>{dialogTitle}</StyledTitle>}
          {dialogDescription && (
            <StyledDesciption>{dialogDescription}</StyledDesciption>
          )}
          {children}
          {!noCloseBtn && (
            <StyledCloseButtonWrapper asChild>
              <Button iconOnly size="xs" variant="neutral-text-only">
                x
              </Button>
            </StyledCloseButtonWrapper>
          )}
        </StyledContent>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default Modal;
