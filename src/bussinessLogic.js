//Function to calculate reward points based on amount
const calculatePoints = (amount) => {
    let points = 0;
    if (amount > 100) {
      points += (amount - 100) * 2;
      points += 50; // 1 point for the amount between $50 and $100
    } else if (amount > 50) {
      points += (amount - 50) * 1;
    }
    return points;
  };

  // Function to calculate points for each customer by month using forEach
  const calculateCustomerPoints = (transactions) => {
    const monthlyPoints = {};

    transactions.forEach((transaction) => {
      const date = new Date(transaction.date);
      const month = date.toLocaleString("default", { month: "long" });
      const points = calculatePoints(transaction.amount);

      // Accumulate points per month
      if (!monthlyPoints[month]) {
        monthlyPoints[month] = 0;
      }
      monthlyPoints[month] += points;
    });

    return monthlyPoints;
  };
  

  export {calculateCustomerPoints}