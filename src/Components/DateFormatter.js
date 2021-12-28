import React from "react";
import "./DateFormtetter.css";
const DateFormatter = (props) => {
  const date = new Date(props.date);
  let day = date.toLocaleString('en-Us',{ day: "2-digit" });
  let month = date.toLocaleString('en-Us',{ month: "long" });
  let year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};
export default DateFormatter;
