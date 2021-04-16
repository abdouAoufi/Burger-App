import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import cssClasses from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

export default class ContactData extends Component {
  state = {
    loading: false,
    name: "",
    email: "",
    adress: {
      street: "",
      postalCode: "",
    },
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    this.sendDataToServer();
  };

  sendDataToServer = () => {
   this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Abdou aoufi",
        email: "test@gmail.com",
        adress: { street: "Test street", zipCode: "35000" },
      },
      deliverMethod: "fatest",
    };
    console.log("order", order);
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.replace("/");
      })
      .catch((error) => {});
  };

  render() {
    console.log(this.props)
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="text" name="street" placeholder="Street" />
        <input type="postal code " name="name" placeholder="Postal code" />
        <Button clicked={this.orderHandler} btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={cssClasses.ContactData}>
        <h4>Enter your contact data ..!</h4>
        {form}
      </div>
    );
  }
}
