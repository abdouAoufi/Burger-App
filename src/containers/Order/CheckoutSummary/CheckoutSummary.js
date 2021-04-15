import React from "react";
import Burger from "../../../components/Burger/Burger";
import Button from "../../../components/UI/Button/Button";
import cssClasses from "./CheckoutSummary.css";

const CheckoutSummary = (props) => {
  return (
    <div className={cssClasses.CheckoutSummary}>
      <h1>we hope it tastes well !</h1>
      <div style={{ width: "100%", height: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button
        btnType="Danger"
        clicked={props.checkoutCanceled}
      >
        Cancel
      </Button>
      <Button
        btnType="Success"
        clicked={props.checkoutContinued}
      >
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
