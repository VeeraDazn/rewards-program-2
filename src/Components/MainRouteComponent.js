import React from "react";
import { calculateCustomerPoints } from "../bussinessLogic";
import CustomerName from "./CustomersName";
import CustomerPoints from "./CustomerPoints";

const MainRouteComponent = ({customers}) => {
  return (
    <div className="App">
      <h1>Customer Reward Points</h1>
      {customers.map((customer) => {
        const monthlyPoints = calculateCustomerPoints(customer.transactions);
        let totalPoints = 0;
        return (
          <div key={customer.customerId}>
            <CustomerName  name={customer.name}/>
            {Object.entries(monthlyPoints).map(([month, points]) => {
              totalPoints += points; // Accumulate total points across all months
              return (
                <CustomerPoints  key={month} month={month} points={points}/>
              );
            })}
            <strong>Total Points: {totalPoints}</strong>
          </div>
        );
      })}
    </div>
  );
};

export default MainRouteComponent;
