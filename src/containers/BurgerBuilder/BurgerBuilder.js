/* jshint ignore:start */
import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
<<<<<<< HEAD
import BuildControl from "../../components/Burger/BuildControl/BuildControl";
import withClass from "../../components/hoc/WithClass";
import cssClasses from "./BurgerBuilder.css";
=======
import BuildControls from "../../components/Burger/BuildControl/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
>>>>>>> 1682d619a639236dbe01a68989ffa1e50dce3dab

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
<<<<<<< HEAD
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
    ingredientsPrice: {
      salad: 3,
      bacon: 5,
      cheese: 4,
      meat: 10,
    },
  };

  render() {
    console.log("BurgerBuilder ======> ", this.state);
    return (
      <Aux>
        <BuildControl
          ingredients={this.state.ingredients}
          ingredientsPrice={this.state.ingredientsPrice}
          clickPlus={this.changeIngridientPlus}
          clickMinus={this.changeIngridientMinus}
        />
        <Burger ingredients={this.state.ingredients} />
      </Aux>
    );
  }

  changeIngridientPlus = (element) => {
    let meat = this.state.ingredients.meat;
    let cheese = this.state.ingredients.cheese;
    let bacon = this.state.ingredients.bacon;
    let salad = this.state.ingredients.salad;
    let cheesePrice = this.state.ingredientsPrice.cheese;
    let baconPrice = this.state.ingredientsPrice.bacon;
    let meatPrice = this.state.ingredientsPrice.meat;
    let saladPrice = this.state.ingredientsPrice.salad;
    switch (element) {
      case "Cheese":
        cheese = this.state.ingredients.cheese + 1;
        cheesePrice = cheese * 4;
        console.log(cheesePrice);
        break;
      case "Meat":
        meat = this.state.ingredients.meat + 1;
        meatPrice = meat * 10;
        break;
      case "Bacon":
        bacon = this.state.ingredients.bacon + 1;
        baconPrice = bacon * 5;
        break;
      case "Salad":
        salad = this.state.ingredients.salad + 1;
        saladPrice = salad * 3;
        break;
      default:
        break;
    }

    this.setState({
      ingredients: {
        cheese,
        meat,
        bacon,
        salad,
      },
      ingredientsPrice: {
        cheese: cheesePrice,
        meat: meatPrice,
        bacon: baconPrice,
        salad: saladPrice,
      },
    });
  };

  changeIngridientMinus = (element) => {
    let meat = this.state.ingredients.meat;
    let cheese = this.state.ingredients.cheese;
    let bacon = this.state.ingredients.bacon;
    let salad = this.state.ingredients.salad;
    switch (element) {
      case "Cheese":
        if (this.state.ingredients.cheese === 0) {
          cheese = 0;
        } else {
          cheese = this.state.ingredients.cheese - 1;
        }
        break;

      case "Meat":
        if (this.state.ingredients.meat === 0) {
          meat = 0;
        } else {
          meat = this.state.ingredients.meat - 1;
        }
        break;

      case "Bacon":
        if (this.state.ingredients.bacon === 0) {
          bacon = 0;
        } else {
          bacon = this.state.ingredients.bacon - 1;
        }
        break;
      case "Salad":
        if (this.state.ingredients.salad === 0) {
          salad = 0;
        } else {
          salad = this.state.ingredients.salad - 1;
        }
        break;
      default:
        break;
    }

    this.setState({
      ingredients: {
        cheese,
        meat,
        bacon,
        salad,
      },
    });
  };
}

export default withClass(BurgerBuilder, cssClasses.BurgerBuilder);
=======
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
        <Modal show={this.state.purchasing} modalClosed={this.removeBdHandler}>
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

  removeBdHandler = () => {
    this.setState({ purchasing: false });
  };
  purshaseHandler = () => {
    this.setState({ purchasing: true });
  };

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
>>>>>>> 1682d619a639236dbe01a68989ffa1e50dce3dab
