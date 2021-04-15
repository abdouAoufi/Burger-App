import React, { Component } from "react";
import CheckoutSummary from "../Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
export default class Checkout extends Component {
  state = {
    ingredients: {
      sum : 0 ,
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0,
    },
  };

  checkViablity = (ingredients) => {
    let toatalPrice = 0 ;
    Object.values(ingredients).forEach(price => {toatalPrice+=price});
    return toatalPrice ;
  }

  componentDidMount() {
    // console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let param of query.entries()) {
      ingredients[param[0]] = +param[1];
    }
    this.setState({  ingredients: ingredients });
    ;
    if(this.checkViablity(ingredients) < 1){
      this.props.history.replace("/");
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
          component={ContactData}
        />
      
      </div>
    );
  }
}
