// src/components/ExpenseOverview.jsx
import React from "react";

const ExpenseOverview = ({ expenses, monthlyExpenses }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Ausgabenübersicht</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/5 py-2">Beschreibung</th>
              <th className="w-1/5 py-2">Kategorie</th>
              <th className="w-1/5 py-2">Betrag</th>
              <th className="w-1/5 py-2">Zahlweise</th>
              <th className="w-1/5 py-2">Bemerkung</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index} className="text-gray-700">
                <td className="border px-4 py-2">{expense.description}</td>
                <td className="border px-4 py-2">{expense.category}</td>
                <td className="border px-4 py-2">
                  €{expense.amount.toFixed(2)}
                </td>
                <td className="border px-4 py-2">{expense.frequency}</td>
                <td className="border px-4 py-2">{expense.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Gesamte monatliche Ausgaben</h3>
        <p className="text-gray-700">€{monthlyExpenses.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ExpenseOverview;
