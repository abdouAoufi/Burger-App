/* jshint ignore:start */
import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControl/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
    pushasble: false,
    purchasing: false,
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0; // ? intresting statement
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          disabled={disableInfo}
          purchasble={this.state.pushasble}
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          ordered={this.purshaseHandler}
        />
        
      </Aux>
    );
  }

  purshaseHandler = () => {
    this.setState({purchasing : true}); 
  }

  updatePurshase(ingredient) {
    const sum = Object.keys(ingredient)
      .map((igKey) => {
        return ingredient[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ pushasble: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type]; // salad
    const updatedCounted = oldCount + 1; // 2
    const updatedIngredient = {
      ...this.state.ingredients, // ! original array
    };
    updatedIngredient[type] = updatedCounted; // update salad elemtnt
    const priceAddition = INGREDIENT_PRICE[type]; // get price of salad
    const oldPrice = this.state.totalPrice; // get the old total price
    const newPrice = oldPrice + priceAddition; // add to it the addition
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredient,
    });
    this.updatePurshase(updatedIngredient);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount - 1;
    const updatedIngredient = {
      ...this.state.ingredients,
    };
    updatedIngredient[type] = updatedCounted;
    const priceAddition = INGREDIENT_PRICE[type];
    const oldPrice = this.state.totalPrice;
    if (oldCount <= 0) {
      return;
    }
    const newPrice = oldPrice - priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredient,
    });
    this.updatePurshase(updatedIngredient);
  };
}
export default BurgerBuilder;
