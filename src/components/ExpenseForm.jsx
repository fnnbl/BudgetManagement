// src/components/ExpenseForm.jsx
import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("");
  const [remark, setRemark] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && category && amount && frequency) {
      addExpense({
        description,
        category,
        amount: parseFloat(amount),
        frequency,
        remark,
      });
      setDescription("");
      setCategory("");
      setAmount("");
      setFrequency("");
      setRemark("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Ausgabe hinzufügen</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Beschreibung</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Kategorie</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        >
          <option value="" disabled>
            Wählen Sie eine Kategorie
          </option>
          <option value="Miete">Miete</option>
          <option value="Freizeit">Freizeit</option>
          <option value="Urlaub">Urlaub</option>
          <option value="Telefon/Internet">Telefon/Internet</option>
          <option value="Privat">Privat</option>
          <option value="Studium">Studium</option>
          <option value="ÖPNV">ÖPNV</option>
          <option value="Abonnements">Abonnements</option>
          <option value="Sport">Sport</option>
          <option value="Vermögensaufbau">Vermögensaufbau</option>
          <option value="Altersvorsorge">Altersvorsorge</option>
          <option value="Vermögensabsicherung">Vermögensabsicherung</option>
          <option value="Persönliche Absicherung">
            Persönliche Absicherung
          </option>
          <option value="Lebenshaltung">Lebenshaltung</option>
          <option value="Konsum">Konsum</option>
          <option value="Kredite/Darlehen">Kredite/Darlehen</option>
          <option value="Sonstige">Sonstige</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Betrag</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Zahlweise</label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
          required
        >
          <option value="" disabled>
            Wählen Sie eine Zahlweise
          </option>
          <option value="Monatlich">Monatlich</option>
          <option value="Vierteljährlich">Vierteljährlich</option>
          <option value="Halbjährlich">Halbjährlich</option>
          <option value="Jährlich">Jährlich</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Bemerkung</label>
        <input
          type="text"
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md"
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

export default ExpenseForm;
