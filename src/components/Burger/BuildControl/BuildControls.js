/* jshint ignore:start */
import React from "react";
import cssClasses from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
  let combination = props.purchasble && props.isAuth;
  return (
    <div className={cssClasses.BuildControls}>
      <strong>Current Price : {props.price.toFixed(2)} $ </strong>
      {controls.map((ctrl) => (
        <BuildControl
          disabled={props.disabled[ctrl.type]} // { salad : true , meat : false ......}
          key={ctrl.label}
          label={ctrl.label}
          added={() => {
            props.ingredientAdded(ctrl.type);
          }}
          removed={() => {
            props.ingredientRemoved(ctrl.type);
          }}
        />
      ))}
      <button
        className={cssClasses.OrderButton}
        disabled={!props.purchasble}
        onClick={props.ordered}
      >
        {props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
      </button>
    </div>
  );
};

export default buildControls;
