import React, { useState,useEffect } from "react";
import styles from "./NewExpense.module.css";
import Button from "./Button";
import ErrroModal from "./ErrorModal";

export const NewExpense = (props) => {
  const [expense, setExpense] = useState({
    title: "",
    createdDate: new Date(),
    amount: 0,
  });
  useEffect(()=>{
    console.log('Running USE EFFECT !!!!')
  },[setExpense]);
  const addExpense = (event) => {
    event.preventDefault();
    checkErrors();
  };
  const titleChangeHandler = (event) => {
    setExpense({
      ...expense,
      title: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    setExpense({
      ...expense,
      createdDate: event.target.value,
    });
  };
  const amountChangeHandler = (event) => {
    setExpense({
      ...expense,
      amount: event.target.value,
    });
  };
  const [error, setErrors] = useState(false);
  let errors = error ? error : null;
  const checkErrors = () => {
    if (!expense.title) {
      errors = (
        <ErrroModal
          message="Please enter a title for your expense"
          hide={(hidden) => setErrors(false)}
        />
      );
      setErrors(errors);
      return;
    } else if (!expense.createdDate) {
      errors = (
        <ErrroModal
          message="Please enter a date "
          hide={(hidden) => setErrors(false)}
        />
      );
      setErrors(errors);
      return;
    } else if (!expense.amount) {
      errors = (
        <ErrroModal
          message="Please enter a amount"
          hide={(hidden) => setErrors(false)}
        />
      );
      setErrors(errors);
      return;
    } else if (expense.amount < 0) {
      errors = (
        <ErrroModal
          message="Amount should be greater than 0"
          hide={(hidden) => setErrors(false)}
        />
      );
      setErrors(errors);
      return;
    }
    props.addNewExpense(expense);
    setExpense({
      title: "",
      createdDate: "",
      amount: 0,
    });
  };
  let form = (
    <form onSubmit={addExpense} className={styles["expense-form"]}>
      <div className={styles["new-expense__control"]}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={expense?.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Date</label>
          <input
            type="date"
            value={expense?.createdDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className={styles["new-expense__control"]}>
          <label>Amount</label>
          <input
            className={expense.amount<0 ? styles.invalid_control : ''}
            type="number"
            value={expense?.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles["new-expense__actions"]}>
          <Button text="Add" type="submit" />
        </div>
      </div>
    </form>
  );

  let data = error ? errors : form;
  return <div>{data}</div>;
};
export default NewExpense;
