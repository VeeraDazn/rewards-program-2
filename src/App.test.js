import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import MainRouteComponent from "./Components/MainRouteComponent";

// Mock the MainRouteComponent since we don't need to test its implementation
jest.mock("./Components/MainRouteComponent", () => () => <div>Mocked MainRouteComponent</div>);

describe("App Component", () => {
  beforeEach(() => {
    // Mock fetch for userData.json
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              customerId: "1",
              name: "John Doe",
              transactions: [
                { date: "2023-07-15", amount: 120 },
                { date: "2023-08-19", amount: 75 },
                { date: "2023-09-04", amount: 150 },
              ],
            },
            {
              customerId: "2",
              name: "Jane Smith",
              transactions: [
                { date: "2023-07-11", amount: 200 },
                { date: "2023-07-12", amount: 200 },
                { date: "2023-08-05", amount: 50 },
                { date: "2023-09-20", amount: 100 },
              ],
            },
          ]),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks(); // Reset mocks after each test
  });

  test("shows loading initially and then renders MainRouteComponent", async () => {
    // Render the App component
    render(<App />);

    // Check if the loading text is shown initially
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    // Wait for the fetch call to complete and check if MainRouteComponent is rendered
    await waitFor(() => {
      expect(screen.getByText(/Mocked MainRouteC/)).toBeInTheDocument();
    });

    // Ensure "Loading..." is no longer present
    expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument();
  });
});
