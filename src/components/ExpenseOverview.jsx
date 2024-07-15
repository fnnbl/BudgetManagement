import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const ExpenseOverview = ({ expenses, monthlyExpenses }) => {
  const data = {
    labels: [...new Set(expenses.map((exp) => exp.category))],
    datasets: [
      {
        data: expenses.reduce(
          (acc, exp) => {
            const categoryIndex = acc.labels.indexOf(exp.category);
            let monthlyAmount = exp.amount;
            switch (exp.paymentFrequency) {
              case "Vierteljährlich":
                monthlyAmount /= 3;
                break;
              case "Halbjährlich":
                monthlyAmount /= 6;
                break;
              case "Jährlich":
                monthlyAmount /= 12;
                break;
              default:
                break;
            }
            acc.data[categoryIndex] =
              (acc.data[categoryIndex] || 0) + monthlyAmount;
            return acc;
          },
          { labels: [], data: [] }
        ).data,
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Ausgabenübersicht</h2>
      <Pie data={data} />
      <div>
        <h3>Monatliche Gesamtausgaben: {monthlyExpenses.toFixed(2)}€</h3>
      </div>
    </div>
  );
};

export default ExpenseOverview;
