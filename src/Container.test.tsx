import { render, screen } from "@testing-library/react";
import React from "react";
import { Container } from "./Container";

// Jest is the underlying test framework
test("renders title", () => {
  render(<Container title={"New Container"} />);

  const linkElement = screen.getByText(/New Container/i);
  expect(linkElement).toBeInTheDocument();

  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toBeInTheDocument();
  expect(divElement).toHaveTextContent("New Container");
  expect(divElement).toHaveAttribute("role", "contentinfo");
});
