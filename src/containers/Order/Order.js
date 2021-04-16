import React from "react";
import cssClasses from "./Order.css";

const Order = (props) => {
  const ingredients = [];
  for (let key in props.ingredients) {
    ingredients.push({ name: key, amount: props.ingredients[key] });
  }

  const ingredientOutput = ingredients.map(ig => (<li key={ig.name}>{ig.name + " : " + ig.amount}</li>))
  return (
    <div className={cssClasses.Order}>
      <div className={cssClasses.container}>
        <p className={cssClasses.subtitle}>Ingredients :</p>
        <ul key={props.id}>{ingredientOutput}</ul>
        <p className={cssClasses.subtitle}>
          price : <strong>{props.price.toFixed(2)} $ </strong>
        </p>
      </div>
    </div>
  );
};

export default Order;
