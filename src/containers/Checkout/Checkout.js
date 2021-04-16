import React, { Component } from "react";
import CheckoutSummary from "../Order/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
export default class Checkout extends Component {
  state = {
    price: 0,
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
    },
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        console.log("We found it ! ");
        price = +param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ price: price, ingredients: ingredients });
    if (price < 1) {
      // this.props.history.replace("/");
    }
  }
  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data"); // because checkout is direct child to the parent
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCanceled={this.checkoutCanceledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.url + "/contact-data"}
          render={(props) => (
            <ContactData
              {...props}
              ingredients={this.state.ingredients}
              price={this.state.price}
            />
          )}
        />
      </div>
    );
  }
}
