import { TextField } from "@abhic91/atoms";
import React, {
  ChangeEvent,
  createRef,
  Dispatch,
  FocusEvent,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { generateRandomId } from "./utils";

const StyledWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  & input {
    width: 50px;
    height: 45px;
    text-align: center;
  }
`;

export type IOTPInputProps = {
  noOfInputs: number;
  isDisabled?: boolean;
  isErrorProp: boolean;
  clearOTPKey?: number;
  setOTPValue: Dispatch<SetStateAction<string>>; //function that sets value of parent's otp val state
  onEnterPressed?: Function;
  errorMessage?: string;
  //   inputTypeProp: '';
};

const OTPInput = ({
  noOfInputs,
  setOTPValue,
  isDisabled,
  isErrorProp,
  onEnterPressed,
  clearOTPKey,
}: IOTPInputProps) => {
  const randomIds = useMemo(
    () =>
      [...Array(noOfInputs)].map((_, index) => generateRandomId(`${index}`)),
    [noOfInputs]
  );
  const [allInpValues, setAllInpValues] = useState(() =>
    randomIds.map((randomId) => ({ id: randomId, inputValue: "" }))
  );
  const inputRefs = useRef(
    randomIds.map((id) => {
      return { id, ref: createRef<HTMLInputElement | null>() };
    })
  );

  const [isError, setIsError] = useState(false);

  const onChange = (id: string, value: string, index: number) => {
    setAllInpValues((currentVal) =>
      currentVal.map((input) =>
        input.id === id ? { ...input, inputValue: value.slice(-1) } : input
      )
    );

    if (value.length) setFocusOnInputAtIndex(index + 1);

    setIsError(false);
  };

  const onKeyUp = (
    e: KeyboardEvent<HTMLInputElement>,
    id: string,
    index: number
  ) => {
    if (e.key === "Backspace") {
      setAllInpValues((currentVal) =>
        currentVal.map((input) =>
          input.id === id ? { ...input, inputValue: "" } : input
        )
      );
      setFocusOnInputAtIndex(index - 1);
      return;
    }
    if (e.key === "ArrowLeft") {
      setFocusOnInputAtIndex(index - 1);
      return;
    }
    if (e.key === "ArrowRight") {
      setFocusOnInputAtIndex(index + 1);
      return;
    }
    if (e.key === "Enter") {
      onEnterPressed?.();
      return;
    }
  };

  const onPaste = (e: ClipboardEvent) => {
    e.preventDefault();
    const pastedText = (e.clipboardData?.getData("Text") || "").trim();
    const pastedTextArray = pastedText.split("");
    setAllInpValues((currentVal) =>
      currentVal.map((inp, index) => ({
        ...inp,
        inputValue: pastedTextArray[index] || "",
      }))
    );
  };

  const setFocusOnInputAtIndex = (index: number) => {
    const inputRef = inputRefs.current[index]?.ref;
    if (inputRef) inputRef.current?.focus();
  };

  // set the OTP value for the parent component
  //using the OTPInput component
  useEffect(() => {
    setOTPValue(allInpValues.map((input) => input.inputValue).join(""));
  }, [allInpValues]);

  useEffect(() => {
    setAllInpValues((currentVal) =>
      currentVal.map((input) => ({ ...input, inputValue: "" }))
    );
  }, [clearOTPKey]);

  useEffect(() => {
    setIsError(isErrorProp);
  }, [isErrorProp]);

  return (
    <StyledWrapper data-testid="otpWrapper">
      {allInpValues.map(({ id, inputValue }, index) => {
        return (
          <TextField
            key={id}
            inputTextProps={{
              id,
              value: inputValue,
              onPaste: (e: ClipboardEvent) => onPaste(e),
              onChange: (e: ChangeEvent<HTMLInputElement>) =>
                onChange(id, e.target.value, index),
              onFocus: (e: FocusEvent<HTMLInputElement>) => e.target.select(),
              onKeyUp: (e: KeyboardEvent<HTMLInputElement>) =>
                onKeyUp(e, id, index),
              disabled: isDisabled,
              error: isError,
              "aria-label": `OTP Input ${index + 1}`,
            }}
            ref={inputRefs.current[index]?.ref}
          />
        );
      })}
    </StyledWrapper>
  );
};

export default OTPInput;
