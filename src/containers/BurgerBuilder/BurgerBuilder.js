/* jshint ignore:start */
import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControl/BuildControls";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
        />
      </Aux>
    );
  }

  addIngredientHandler = (type) => {
    console.log("clicked");
    const oldCount = this.state.ingredients[type]; // salad
    const updatedCounted = oldCount + 1; // 2
    const updatedIngredient = {
      ...this.state.ingredients, // original array
    };
    updatedIngredient[type] = updatedCounted; // update salad elemtnt
    const priceAddition = INGREDIENT_PRICE[type]; // get price of salad
    const oldPrice = this.state.totalPrice; // get the old total price
    const newPrice = oldPrice + priceAddition; // add to it the addition
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredient }); // update the state
  };

  removeIngredientHandler = (type) => {
    console.log("clicked");
    const oldCount = this.state.ingredients[type]; // salad
    const updatedCounted = oldCount - 1; // 2
    const updatedIngredient = {
      ...this.state.ingredients, // original array
    };
    updatedIngredient[type] = updatedCounted; // update salad elemtnt
    const priceAddition = INGREDIENT_PRICE[type]; // get price of salad
    const oldPrice = this.state.totalPrice; // get the old total price
    const newPrice = oldPrice + priceAddition; // add to it the addition
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredient }); // update the state
  };
}

export default BurgerBuilder;
