/* jshint ignore:start */
import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import cssClasses from "./burger.css"

class Burger extends React.Component {
  render() {
    return (
      <div className={cssClasses.Burger}>
            <BurgerIngredient type="bread-top" /> 
            <BurgerIngredient type="meat" /> 
            <BurgerIngredient type="cheese" /> 
            <BurgerIngredient type="bread-bottom" /> 
      </div>
    ) 
  }
}
export default Burger;
