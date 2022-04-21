import { createEvent, fireEvent, render, screen } from "@testing-library/react";
import OTPInput from "./OtpInput";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("OTPInput", () => {
  const onEnterPressed = jest.fn();
  const setOTPValue = jest.fn();

  beforeEach(() =>
    render(
      <OTPInput
        noOfInputs={6}
        isErrorProp={false}
        setOTPValue={setOTPValue}
        onEnterPressed={onEnterPressed}
      />
    )
  );

  test("renders", () => {
    expect(screen.getByTestId("otpWrapper")).toBeInTheDocument();
  });

  test("Renders OTPInput with specified no of input text boxes", async () => {
    const textBoxes = await screen.findAllByRole("textbox");
    expect(textBoxes).toHaveLength(6);
  });

  test("Focus shifts to next input box on input", async () => {
    const textBoxes = await screen.findAllByRole("textbox");
    const firstInput = textBoxes[0];
    const secondInput = textBoxes[1];
    userEvent.type(firstInput, "1");
    expect(firstInput).not.toHaveFocus();
    expect(secondInput).toHaveFocus();
  });
  test("Focus shifts to previous input box on pressing backspace", async () => {
    const textBoxes = await screen.findAllByRole("textbox");
    const firstInput = textBoxes[0];
    const secondInput = textBoxes[1];

    userEvent.type(firstInput, "1");
    userEvent.type(secondInput, "2");

    userEvent.click(secondInput);

    fireEvent.keyUp(secondInput, { key: "Backspace" });

    expect(secondInput).toHaveTextContent("");
    expect(firstInput).toHaveFocus();
  });
  test("Every input has only one character", async () => {
    const textBoxes = await screen.findAllByRole("textbox");
    const firstInput = textBoxes[0];
    const secondInput = textBoxes[1];
    //only takes the last character
    fireEvent.change(firstInput, { target: { value: "12" } });

    expect(firstInput).toHaveValue("2");
  });

  test("On enter pressed, calls onEnterPressed prop", async () => {
    const textBoxes = await screen.findAllByRole("textbox");
    const firstInput = textBoxes[0];
    const secondInput = textBoxes[1];

    userEvent.type(firstInput, "1");
    userEvent.type(secondInput, "2");

    fireEvent.keyUp(secondInput, { key: "Enter" });
    expect(onEnterPressed).toHaveBeenCalledTimes(1);
  });

  test("Arrow keys pressed shifts focus to next or previous input text box", async () => {
    const textBoxes = await screen.findAllByRole("textbox");

    const firstInput = textBoxes[0];
    const secondInput = textBoxes[1];
    const lastInput = textBoxes[5];

    userEvent.click(firstInput);
    fireEvent.keyUp(firstInput, { key: "ArrowLeft" });
    expect(firstInput).toHaveFocus();

    fireEvent.keyUp(firstInput, { key: "ArrowRight" });
    expect(secondInput).toHaveFocus();

    fireEvent.keyUp(secondInput, { key: "ArrowLeft" });
    expect(firstInput).toHaveFocus();

    userEvent.click(lastInput);
    fireEvent.keyUp(lastInput, { key: "ArrowRight" });
    expect(lastInput).toHaveFocus();
  });

  test("Pasting text sets values of input text boxes", async () => {
    const textBoxes = await screen.findAllByRole("textbox");

    const [firstInput] = textBoxes;

    fireEvent.click(firstInput);

    const createPaste = (data: string) =>
      createEvent.paste(firstInput, {
        clipboardData: {
          getData: () => data,
        },
      });

    fireEvent(firstInput, createPaste("123456"));

    textBoxes.forEach((textBox, index) => {
      expect(textBox).toHaveValue((index + 1).toString());
    });

    textBoxes.forEach((textBox) => userEvent.clear(textBox));

    fireEvent(firstInput, createPaste("123456789"));

    textBoxes.forEach((textBox, index) => {
      expect(textBox).toHaveValue((index + 1).toString());
    });

    textBoxes.forEach((textBox) => userEvent.clear(textBox));

    fireEvent(firstInput, createPaste("12"));

    textBoxes.forEach((textBox, index) => {
      expect(textBox).toHaveValue(
        index == 0 || index == 1 ? (index + 1).toString() : ""
      );
    });
  });
});
