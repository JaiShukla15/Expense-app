import React from "react";
import Card from "./Card/Card";
import DateFormatter from "./DateFormatter";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  console.log(props);
  return (
    <Card className="expense-item">
      <DateFormatter date={props.expense.createdDate} />
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">Rs.&nbsp;{props.expense.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
