/* jshint ignore:start */
import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import cssClasses from "./burger.css";

export default function burger(props) {
  let transformIngredient = Object.keys(props.ingredients)
    .map((ijKey) => {
      return [...Array(props.ingredients[ijKey])].map((_, i) => (
        <BurgerIngredient key={i + ijKey} type={ijKey} /> // ! draw a burger based on ingrediens 
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformIngredient.length === 0) {
    transformIngredient = <p>{props.waitingText}</p>;
  }
  return (
    <div className={cssClasses.Burger}>
      <BurgerIngredient key={"bread-top"} type={"bread-top"} />
      {transformIngredient}
      <BurgerIngredient key={"bread-bottom"} type={"bread-bottom"} />
    </div>
  );
}
