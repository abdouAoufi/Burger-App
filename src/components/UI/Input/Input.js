import React from "react";
import cssClass from "./Input.css";

const Input = (props) => {
  let inputElement = null;
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={cssClass.inputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;

    case "textarea":
      inputElement = (
        <textarea
          className={cssClass.inputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;

    case "select":
      inputElement = (
        <select className={cssClass.inputElement} value={props.value}>
          {props.elementConfig.option.map((option) => (
            <option key={option.value}  value={option.value}> {option.displayValue} </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={cssClass.inputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;
  }
  return (
    <div className={cssClass.Input}>
      <label className={cssClass.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
