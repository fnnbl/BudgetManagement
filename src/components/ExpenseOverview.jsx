import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const ExpenseOverview = ({ expenses, monthlyExpenses }) => {
  return (
    <div className="expense-overview">
      <h2>Ausgabenübersicht</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <strong>Beschreibung:</strong> {expense.description} <br />
            <strong>Kategorie:</strong> {expense.category} <br />
            <strong>Betrag:</strong> {expense.amount.toFixed(2)} €
          </li>
        ))}
      </ul>
      <div>
        <h3>Gesamtausgaben pro Monat: {monthlyExpenses.toFixed(2)} €</h3>
      </div>
    </div>
  );

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
