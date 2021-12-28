import React from "react";
import './Button.css';
const Button = (props) => {
  const handleClick = ()=>{
      if(props.clickHandler){
        props.clickHandler(true);
      }
  }
  const classes = `add-btn ${props.className}`;
  return <button type={props.type} className={classes} onClick={handleClick}>{props.text}</button>;
};
export default Button;
