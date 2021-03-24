/* jshint ignore:start */

import React from "react";
import Aux from "../../../hoc/Aux";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <div>
        <h3>Your order summary </h3>
        <p>A delisous burger with rhe following ingredients : </p>
        <ul>{ingredientSummary}</ul>
        <p>Continue with checkout ? </p>
      </div>
    </Aux>
  );
};
export default OrderSummary;
