import React from "react";
import { render, screen } from "@testing-library/react";
import MainRouteComponent from "./MainRouteComponent";
import { calculateCustomerPoints } from "../bussinessLogic"; // Adjust the import path as necessary

jest.mock("../bussinessLogic");

describe("MainRouteComponent", () => {
  const mockCustomers = [
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
  ];

  beforeEach(() => {
    // Mock implementation that returns different values for each customer
    calculateCustomerPoints.mockImplementation((transactions) => {
      if (transactions[0].amount === 120) {
        return {
          July: 120,
          August: 75,
          September: 150,
        };
      } else if (transactions[0].amount === 200) {
        return {
          July: 400,
          August: 50,
          September: 100,
        };
      }
      return {};
    });
  });

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  test("renders customer names and points correctly", () => {
    render(<MainRouteComponent customers={mockCustomers} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();


    expect(screen.getByText("July: 120 points")).toBeInTheDocument();
    expect(screen.getByText("August: 75 points")).toBeInTheDocument();
    expect(screen.getByText("September: 150 points")).toBeInTheDocument();


    expect(screen.getByText("July: 400 points")).toBeInTheDocument();
    expect(screen.getByText("August: 50 points")).toBeInTheDocument();
    expect(screen.getByText("September: 100 points")).toBeInTheDocument();


    expect(screen.getByText("Total Points: 345")).toBeInTheDocument(); 


    expect(screen.getByText("Total Points: 550")).toBeInTheDocument(); 
  });
});
