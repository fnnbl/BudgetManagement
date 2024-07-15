import React, { useState } from "react";

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

const paymentFrequencies = [
  "Monatlich",
  "Vierteljährlich",
  "Halbjährlich",
  "Jährlich",
];

const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [amount, setAmount] = useState("");
  const [paymentFrequency, setPaymentFrequency] = useState(
    paymentFrequencies[0]
  );
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({
      description,
      category,
      amount: Number(amount),
      paymentFrequency,
      note,
    });
    setDescription("");
    setCategory(categories[0]);
    setAmount("");
    setPaymentFrequency(paymentFrequencies[0]);
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Beschreibung:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Kategorie:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <label>
        Betrag:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>
      <label>
        Zahlweise:
        <select
          value={paymentFrequency}
          onChange={(e) => setPaymentFrequency(e.target.value)}
        >
          {paymentFrequencies.map((freq) => (
            <option key={freq} value={freq}>
              {freq}
            </option>
          ))}
        </select>
      </label>
      <label>
        Bemerkung:
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </label>
      <button type="submit">Hinzufügen</button>
    </form>
  );
};

export default ExpenseForm;
