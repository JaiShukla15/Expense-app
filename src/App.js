import React, { useState } from "react";
import Expenses from "./Components/Expenses";
const App = () => {
  const [expenses, setExpense] = useState([]);
  const newExpense = (expense) => {
    setExpense((prev) => [expense, ...prev]);
  };
  return (
    <div>
      <Expenses expenses={expenses} newExpense={newExpense} />
    </div>
  );
};
export default App;
