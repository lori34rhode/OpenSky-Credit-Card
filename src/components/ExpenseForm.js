import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Gas & Auto');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount).toFixed(2),
      category,
      date: new Date().toLocaleDateString()
    };

    onAddExpense(newExpense);
    setTitle('');
    setAmount('');
  };

  return (
    <div className="form-card">
      <h3>Log OpenSky Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Merchant / Title</label>
          <input 
            type="text" 
            placeholder="e.g., Walmart, Chevron" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Amount ($)</label>
          <input 
            type="number" 
            step="0.01" 
            placeholder="0.00" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Gas & Auto">Gas & Auto</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Subscriptions">Subscriptions</option>
            <option value="Other Logistics">Other Logistics</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Authorize Expense</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
