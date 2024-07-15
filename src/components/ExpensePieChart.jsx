// src/components/ExpensePieChart.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const ExpensePieChart = ({ expenses }) => {
  const categories = [
    "Miete",
    "Freizeit",
    "Urlaub",
    "Telefon/Internet",
    "Privat",
    "Studium",
    "ÖPNV",
    "Abonnements",
    "Sport",
    "Vermögensaufbau",
    "Altersvorsorge",
    "Vermögensabsicherung",
    "Persönliche Absicherung",
    "Lebenshaltung",
    "Konsum",
    "Kredite/Darlehen",
    "Sonstige",
  ];

  const categoryData = categories.map((category) => {
    return expenses
      .filter((expense) => expense.category === category)
      .reduce((sum, expense) => {
        let monthlyAmount = expense.amount;
        switch (expense.paymentFrequency) {
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
        return sum + monthlyAmount;
      }, 0);
  });

  const backgroundColors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#FF7043",
    "#4CAF50",
    "#F06292",
    "#9575CD",
    "#66BB6A",
    "#FFB74D",
    "#9CCC65",
    "#FF8A65",
    "#7986CB",
    "#A1887F",
    "#FFD54F",
    "#4DB6AC",
    "#E57373",
    "#BA68C8",
  ];

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Ausgaben pro Kategorie",
        data: categoryData,
        backgroundColor: backgroundColors.slice(0, categories.length),
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Ausgaben pro Kategorie</h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpensePieChart;
