import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, currency, expenses, dispatch } = useContext(AppContext);
  const [newBudget, setBudget] = useState("");
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const budgetChange = (amount) => {
    if (amount > 20000) {
      alert("Budget cannot exceed " + currency + " 20000");
      return;
    } else if (amount < totalExpenses) {
      alert(
        "Budget cannot be below already allocated funds of:  " +
          currency +
          " " +
          totalExpenses
      );
      setBudget(totalExpenses);
      return;
    }

    dispatch({
      type: "SET_BUDGET",
      payload: parseInt(amount),
    });
  };
  return (
    <div className="alert alert-secondary">
      Budget: {currency}
      <input
        required="true"
        type="number"
        id="newBudget"
        step={10}
        //defaultValue={budget}
        min={0}
        max={20010}
        value={budget}
        style={{size: 5 }}
        onChange={(event) => budgetChange(event.target.value)}
      ></input>
    </div>
  );
};

export default Budget;
