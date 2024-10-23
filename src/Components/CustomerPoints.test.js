import React from "react";
import { render, screen } from "@testing-library/react";
import CustomerPoints from "./CustomerPoints";

describe("CustomerPoints Component", () => {
  test("renders the correct month and points passed via props", () => {
    // Render the CustomerPoints component with mock props
    render(<CustomerPoints month="July" points={120} />);

    // Check if the text is rendered correctly
    expect(screen.getByText("July: 120 points")).toBeInTheDocument();
  });
});
