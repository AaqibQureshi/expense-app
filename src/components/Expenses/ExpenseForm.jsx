import React from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2018-1-1" max="2021-1-1" />
        </div>
        <div className="new-expense__actions">
          <button type="sumbit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
