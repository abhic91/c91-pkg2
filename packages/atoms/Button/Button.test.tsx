import { render, screen } from "@testing-library/react";
import Button from "./Button";
import React from "react";

test("renders", () => {
  render(<Button />);
  expect(screen.getByTestId("button")).toBeInTheDocument();
});
