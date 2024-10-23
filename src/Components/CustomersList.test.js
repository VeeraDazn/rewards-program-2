import React from "react";
import { render, screen } from "@testing-library/react";
import CustomerList from "./CustomersName";

describe("CustomerList Component", () => {
  test("renders the customer's name passed via props", () => {
    // Render the CustomerList component with a mock name
    render(<CustomerList name="John Doe" />);

    // Check if the name is rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
