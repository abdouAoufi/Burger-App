/* jshint ignore:start */
import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import cssClasses from "./burger.css";

class Burger extends React.Component {
  render() {
<<<<<<< HEAD
    this.transformIngredient = Object.keys(this.props.ingredients)
      .map((ijKey) => {
        return [...Array(this.props.ingredients[ijKey])].map((_, i) => (
          <BurgerIngredient key={i + ijKey} type={ijKey} />
        ));
      })
      .reduce((arr, el) => {
        return arr.concat(el);
      }, []);
    if (this.transformIngredient.length === 0) {
      this.transformIngredient = <p>Please start adding ingredients !!</p>;
    }
=======
     this.transformIngredient = Object.keys(this.props.ingredients)
    .map((ijKey) => {
      return [...Array(this.props.ingredients[ijKey])].map((_, i) => (
        <BurgerIngredient key={i + ijKey} type={ijKey} />
      ));
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
    // console.log(this.props.ingredients)
        if(this.transformIngredient.length === 0){
            this.transformIngredient = <p>Please start adding ingredients !!</p>
        }
>>>>>>> 1682d619a639236dbe01a68989ffa1e50dce3dab
    return (
      <div className={cssClasses.Burger}>
        <BurgerIngredient key={"bread-top"} type={"bread-top"} />
        {this.transformIngredient}
        <BurgerIngredient key={"bread-bottom"} type={"bread-bottom"} />
      </div>
    );
<<<<<<< HEAD
  }

  changeIngredient() {
    console.log("message");
=======
>>>>>>> 1682d619a639236dbe01a68989ffa1e50dce3dab
  }
}
export default Burger;
