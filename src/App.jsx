// src/App.jsx
import React, { useState } from "react";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseOverview from "./components/ExpenseOverview";
import ExpensePieChart from "./components/ExpensePieChart";

const App = () => {
  const [income, setIncome] = useState({
    netIncome: 0,
    additionalIncome: 0,
    netIncomeDescription: "",
    additionalIncomeDescription: "",
  });
  const [expenses, setExpenses] = useState([]);

  const addIncome = (incomeData) => {
    setIncome(incomeData);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const calculateMonthlyExpenses = () => {
    return expenses.reduce((total, expense) => {
      let monthlyAmount = expense.amount;
      switch (expense.paymentFrequency) {
        case "Vierteljährlich":
          monthlyAmount /= 3; // Vierteljährlich -> monatlich
          break;
        case "Halbjährlich":
          monthlyAmount /= 6; // Halbjährlich -> monatlich
          break;
        case "Jährlich":
          monthlyAmount /= 12; // Jährlich -> monatlich
          break;
        default:
          break;
      }
      return total + monthlyAmount;
    }, 0);
  };

  const monthlyExpenses = calculateMonthlyExpenses();
  const monthlySurplus =
    income.netIncome + income.additionalIncome - monthlyExpenses;

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Expense Management
        </h1>
        <IncomeForm addIncome={addIncome} />
        <ExpenseForm addExpense={addExpense} />
        <ExpenseOverview
          expenses={expenses}
          monthlyExpenses={monthlyExpenses}
        />
        <ExpensePieChart expenses={expenses} />
        <div className="text-center">
          <h2 className="text-xl font-bold">
            Monatlicher Überschuss: {monthlySurplus.toFixed(2)}€
          </h2>
        </div>
      </div>
    </div>
  );
};

export default App;
