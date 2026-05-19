import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [creditLimit] = useState(2000); // Standard OpenSky limit setting

  const addExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(item => item.id !== id));
  };

  const totalSpent = expenses.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);

  return (
    <div className="app-container">
      <Header creditLimit={creditLimit} totalSpent={totalSpent} />
      <div className="dashboard-layout">
        <div>
          <ExpenseForm onAddExpense={addExpense} />
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        </div>
        <div>
          <Receipt expenses={expenses} totalSpent={totalSpent} creditLimit={creditLimit} />
        </div>
      </div>
    </div>
  );
}

export default App;
