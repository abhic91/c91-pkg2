import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./TextField";
import { TextField } from "..";

test("renders learn react link", () => {
  render(<TextField setTrimmedValueOnBlurOrSubmit={() => ""} />);
  const inputFieldWrapper = screen.getByTestId("customTextFieldTestId");
  expect(inputFieldWrapper).toBeInTheDocument();
});
