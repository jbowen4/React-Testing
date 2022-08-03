import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import ButtonWrapper from "./ButtonWrapper";

// Jest is the underlying test framework
test("handles onClick", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title={"Add"} />);
  const buttonElement = screen.getByText("Add");
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
