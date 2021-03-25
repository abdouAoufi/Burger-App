import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends React.Component {
   ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {this.props.ingredients[igKey]}
      </li>
    );
  });
  render(){
    return (
      <Aux>
        <h3>Your order summary </h3>
        <p>A delisous burger with rhe following ingredients : </p>
        <ul>{this.ingredientSummary}</ul>
        <p>
          Total :{" "}
          <span
            style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#17b978" }}
          >
            {this.props.total.toFixed(2)}
          </span>{" "}
          ${" "}
        </p>
        <p>Continue with checkout ? </p>
        <Button clicked={this.props.purchaseCancel} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinue} btnType="Success">
          CONTINUE
        </Button>
      </Aux>
    );
  }

  componentDidUpdate(){
    console.log("[OrderSummary.js] componentDidUpdate")
  }
};
export default OrderSummary;
