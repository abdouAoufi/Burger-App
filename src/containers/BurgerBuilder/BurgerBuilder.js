/* jshint ignore:start */
import React from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControl/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import { connect } from "react-redux";
import * as actionTypes from "../../store/action";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};
class BurgerBuilder extends React.Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    pushasble: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    // axios
    //   .get(
    //     "https://burger-builder-70b3b-default-rtdb.firebaseio.com/ingredients.json"
    //   )
    //   .then((response) => {
    //     this.setState({ ingredients: response.data });
    //     const keys = Object.keys(response.data);
    //     const values = Object.values(response.data);
    //     let price = this.state.totalPrice;
    //     keys.forEach((item, index) => {
    //       price += INGREDIENT_PRICE[item] * values[index];
    //     });
    //     this.setState({ totalPrice: price, pushasble: price > 4 });
    //   })
    //   .catch((error) => {
    //     this.setState({ error: true });
    //   });
  }

  render() {
    const disableInfo = {
      ...this.props.ings,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0; // ? intresting statement
    }
    let orderSummary = null;

    let burger = this.state.error ? (
      <h2 style={{ textAlign: "center", color: "red" }}>
        Ingredient can't be loaded !
      </h2>
    ) : (
      <Spinner />
    );
    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger
            ingredients={this.props.ings}
            waitingText="Please start add some ingredients"
          />
          <BuildControls
            price={this.props.price}
            disabled={disableInfo}
            purchasble={this.props.price > 4}
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            ordered={this.purshaseHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.props.ings}
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContuinueHandler}
          total={this.props.price}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContuinueHandler = () => {
    this.props.history.push({
      pathname: "/checkout",
    });
  };

  purshaseHandler = () => {
    this.setState({ purchasing: true });
  };

  // updatePurshase(ingredient) {
  //   const sum = Object.keys(ingredient)
  //     .map((igKey) => {
  //       return ingredient[igKey];
  //     })
  //     .reduce((sum, el) => {
  //       return sum + el;
  //     }, 0); // if the sum of all ingredients
  //   this.setState({ pushasble: sum > 0 });
  // }

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
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => {
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName });
    },
    onIngredientRemoved: (ingName) => {
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName,
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
