// src/components/ExpenseOverview.jsx
import React from "react";

const ExpenseOverview = ({ expenses, monthlyExpenses }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Ausgabenübersicht</h2>
      <table className="w-full mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Beschreibung</th>
            <th className="border px-4 py-2">Kategorie</th>
            <th className="border px-4 py-2">Betrag</th>
            <th className="border px-4 py-2">Zahlweise</th>
            <th className="border px-4 py-2">Bemerkung</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="border-b">
              <td className="border px-4 py-2">{expense.description}</td>
              <td className="border px-4 py-2">{expense.category}</td>
              <td className="border px-4 py-2">
                {expense.amount.toFixed(2)} €
              </td>
              <td className="border px-4 py-2">{expense.paymentFrequency}</td>
              <td className="border px-4 py-2">{expense.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right">
        <p className="font-bold">
          Gesamte Monatliche Ausgaben: {monthlyExpenses.toFixed(2)} €
        </p>
      </div>
    </div>
  );
};

export default ExpenseOverview;
