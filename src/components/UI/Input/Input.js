import React from "react";
import cssClass from "./Input.css";

const Input = (props) => {
  let inputElement = null;
  const inputClasses = [cssClass.inputElement];
  if(props.invalid && props.shouldValidate && props.touched){
    inputClasses.push(cssClass.Invalid)
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case "select":
      inputElement = (
        <select className={inputClasses.join(" ")} onChange={props.changed} value={props.value}>
          {props.elementConfig.option.map((option) => (
            <option key={option.value} value={option.value}>
              {" "}
              {option.displayValue}{" "}
            </option>
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
          onChange={props.changed}
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
