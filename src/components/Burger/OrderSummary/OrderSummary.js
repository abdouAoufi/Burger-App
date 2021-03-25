import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

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
      <h3>Your order summary </h3>
      <p>A delisous burger with rhe following ingredients : </p>
      <ul>{ingredientSummary}</ul>
      <p>
        Total :{" "}
        <span
          style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#17b978" }}
        >
          {props.total.toFixed(2)}
        </span>{" "}
        ${" "}
      </p>
      <p>Continue with checkout ? </p>
      <Button clicked={props.purchaseCancel} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinue} btnType="Success">
        CONTINUE
      </Button>
    </Aux>
  );
};
export default OrderSummary;
