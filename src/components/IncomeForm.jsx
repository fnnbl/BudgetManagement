// src/components/IncomeForm.jsx
import React, { useState } from "react";

const IncomeForm = ({ addIncome }) => {
  const [income, setIncome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (income) {
      addIncome(parseFloat(income));
      setIncome("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Einkommen hinzufügen</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Monatliches Einkommen</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
      >
        Hinzufügen
      </button>
    </form>
  );
};

export default IncomeForm;
