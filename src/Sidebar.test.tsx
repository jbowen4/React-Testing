import { render, screen } from "@testing-library/react";
import React from "react";
import { Sidebar } from "./Sidebar";

// Jest is the underlying test framework
test("renders items", () => {
  const items = [
    {
      name: "test",
      href: "/test",
    },
  ];
  render(<Sidebar items={items} />);
  const anchorElements = screen.getAllByRole("navigation");
  expect(anchorElements[0]).toHaveTextContent("test");
  expect(anchorElements[0]).toHaveAttribute("role", "navigation");
});
