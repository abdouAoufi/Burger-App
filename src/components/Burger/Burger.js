/* jshint ignore:start */
import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import cssClasses from "./burger.css";

class Burger extends React.Component {
  render() {
     this.transformIngredient = Object.keys(this.props.ingredients)
    .map((ijKey) => {
      return [...Array(this.props.ingredients[ijKey])].map((_, i) => (
        <BurgerIngredient key={i + ijKey} type={ijKey} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
        if(this.transformIngredient.length === 0){
            this.transformIngredient = <p>Please start adding ingredients !!</p>
        }
    return (
      <div className={cssClasses.Burger}>
        <BurgerIngredient key={"bread-top"} type={"bread-top"} />
        {this.transformIngredient}
        <BurgerIngredient key={"bread-bottom"} type={"bread-bottom"} />
      </div>
    );
  }
}
export default Burger;
