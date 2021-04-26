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
import * as actions from "../../store/actions/index";

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
    this.props.onGetIngredients();
  }

  render() {
    const disableInfo = {
      ...this.props.ings,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0; // ? intresting statement
    }
    let orderSummary = null;

    let burger = this.props.error ? (
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
            isAuth={this.props.isAuthenticated}
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
    this.props.onInitPurchase();
    this.props.history.push({
      pathname: "/checkout",
    });
  };

  purshaseHandler = () => {
    if (this.props.isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      this.props.onSetTedirectAuthPath("/checkout");
      this.props.history.push("/auth");
    }
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) => {
      dispatch(actions.addIngredient(ingName));
    },
    onIngredientRemoved: (ingName) => {
      dispatch(actions.removeIngredient(ingName));
    },
    onGetIngredients: () => {
      dispatch(actions.initIngredients());
    },
    onInitPurchase: () => dispatch(actions.purchaseInit()),
    onSetTedirectAuthPath: (path) =>
      dispatch(actions.setAuthRedirectPath(path)),
  };
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
