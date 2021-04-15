import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import cssClasses from './ContactData.css'

export default class ContactData extends Component {
  satate = {
    name: "",
    email: "",
    adress: {
      street: "",
      postalCode: "",
    },
  };
  render() {
    return (
      <div className={cssClasses.ContactData}>
        <h4>Enter your contact data ..!</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Street" />
          <input type="postal code " name="name" placeholder="Postal code" />
          <Button    btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}
