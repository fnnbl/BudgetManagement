import React, { useState } from "react";

const IncomeForm = ({ addIncome }) => {
  const [income, setIncome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(Number(income));
    setIncome("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Monatliches Netto:
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
      </label>
      <button type="submit">Hinzufügen</button>
    </form>
  );
};

export default IncomeForm;
