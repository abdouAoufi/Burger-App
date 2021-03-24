/* jshint ignore:start */
import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControl from "../../components/Burger/BuildControl/BuildControl";
import withClass from "../../components/hoc/WithClass";
import cssClasses from "./BurgerBuilder.css";

class BurgerBuilder extends React.Component {
  state = {
    ingredients: {
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
