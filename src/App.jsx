// src/App.jsx
import React, { useState, useEffect } from "react";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseOverview from "./components/ExpenseOverview";
import ExpensePieChart from "./components/ExpensePieChart";

const App = () => {
  const [income, setIncome] = useState(() => {
    const savedIncome = localStorage.getItem("income");
    return savedIncome ? JSON.parse(savedIncome) : 0;
  });

  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

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
      <ExpensePieChart expenses={expenses} />
      <div>
        <h2>Monatlicher Überschuss: {monthlySurplus.toFixed(2)}€</h2>
      </div>
    </div>
  );
};

export default App;
