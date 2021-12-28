import React from "react";
import Card from "./Card/Card";
import ExpenseItem from "./ExpenseItem";
import NewExpense from "./NewExpense";
import "./Expenses";
const Expenses = (props) => {
  const addExpense = (expense) => {
    props.newExpense(expense);
  };
  return (
    <div>
      <NewExpense addNewExpense={addExpense} />
      <Card className="expenses">
        {props.expenses.map((expense, index) => (
          <ExpenseItem expense={expense} key={index} />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
