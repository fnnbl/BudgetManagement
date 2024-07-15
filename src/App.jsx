import React, { useState } from "react";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseOverview from "./components/ExpenseOverview";

const App = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addIncome = (amount) => {
    setIncome(amount);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const calculateMonthlyExpenses = () => {
    return expenses.reduce((total, expense) => {
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
      return total + monthlyAmount;
    }, 0);
  };

  const monthlyExpenses = calculateMonthlyExpenses();
  const monthlySurplus = income - monthlyExpenses;

  return (
    <div>
      <h1>Budget App</h1>
      <IncomeForm addIncome={addIncome} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseOverview expenses={expenses} monthlyExpenses={monthlyExpenses} />
      <div>
        <h2>Monatlicher Überschuss: {monthlySurplus.toFixed(2)}€</h2>
      </div>
    </div>
  );
};

export default App;
