// src/components/IncomeForm.jsx
import React, { useState } from "react";

const IncomeForm = ({ addIncome }) => {
  const [netIncome, setNetIncome] = useState("");
  const [additionalIncome, setAdditionalIncome] = useState("");
  const [netIncomeDescription, setNetIncomeDescription] = useState("");
  const [additionalIncomeDescription, setAdditionalIncomeDescription] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalIncome = parseFloat(netIncome) + parseFloat(additionalIncome);
    const incomeData = {
      netIncome: parseFloat(netIncome),
      additionalIncome: parseFloat(additionalIncome),
      netIncomeDescription,
      additionalIncomeDescription,
    };
    addIncome(incomeData);
    setNetIncome("");
    setAdditionalIncome("");
    setNetIncomeDescription("");
    setAdditionalIncomeDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Einkommen erfassen</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Nettoeinkommen</label>
        <input
          type="text" // Typ auf text setzen, um Stepper-Pfeile zu entfernen
          pattern="\d*" // Nur numerische Eingaben zulassen
          value={netIncome}
          onChange={(e) => setNetIncome(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          Beschreibung des Nettoeinkommens
        </label>
        <input
          type="text"
          value={netIncomeDescription}
          onChange={(e) => setNetIncomeDescription(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Zusätzliches Einkommen</label>
        <input
          type="text" // Typ auf text setzen, um Stepper-Pfeile zu entfernen
          pattern="\d*" // Nur numerische Eingaben zulassen
          value={additionalIncome}
          onChange={(e) => setAdditionalIncome(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">
          Beschreibung des zusätzlichen Einkommens
        </label>
        <input
          type="text"
          value={additionalIncomeDescription}
          onChange={(e) => setAdditionalIncomeDescription(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Hinzufügen
      </button>
    </form>
  );
};

export default IncomeForm;
