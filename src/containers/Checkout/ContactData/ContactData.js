import React, { Component, useState, useEffect } from "react";
import Button from "../../../components/UI/Button/Button";
import cssClasses from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import InputElement from "../../../components/UI/Input/Input";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/WithErrorHandler/WithErrorHandler";
import * as actions from "../../../store/actions/orderActions";
import { updateObject, checkValidity } from "../../../shared/utility";
const ContactData = (props) => {
  const [loading, setLoading] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Your name",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 20,
        hasNum: false,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: "input",
      elementConfig: {
        type: "email",
        placeholder: "Your email",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 20,
        hasNum: true,
      },
      valid: false,
      touched: false,
    },
    street: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Street",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 15,
        hasNum: true,
      },
      valid: false,
      touched: false,
    },
    zipCode: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "zip code",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5,
        hasNum: true,
      },
      valid: false,
      touched: false,
    },
    country: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Country",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 10,
        hasNum: false,
      },
      valid: false,
      touched: false,
    },
    deliveryMethod: {
      elementType: "select",
      elementConfig: {
        option: [
          { value: "fastest", displayValue: "Fastest" },
          { value: "cheapest", displayValue: "Cheapest" },
        ],
      },
      value: "fastest",
      valid: true,
      validation: {
        required: false,
      },
    },
  });
  const [formIsValid, seFormIsValid] = useState(false);

  const orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in orderForm) {
      formData[formElementIdentifier] =
        orderForm[formElementIdentifier].value;
    }
    const order = {
      ingredients: props.ings,
      price: props.price,
      orderData: formData,
      userId: props.userId,
    };
    props.onOrderBurger(order);
  };

  const formElemntArray = [];
  for (let key in orderForm) {
    formElemntArray.push({
      id: key,
      setup: orderForm[key],
    });
  }
  let form = (
    <form onSubmit={orderHandler}>
      {formElemntArray.map((formElement) => (
        <InputElement
          changed={(event) => {
            inputChangedHandler(event, formElement.id , orderForm , setOrderForm , seFormIsValid);
          }}
          touched={formElement.setup.touched}
          shouldValidate={formElement.setup.validation}
          invalid={!formElement.setup.valid}
          key={formElement.id}
          elementType={formElement.setup.elementType}
          elementConfig={formElement.setup.elementConfig}
          value={formElement.setup.value}
        />
      ))}
      <Button
        disabled={formIsValid}
        clicked={(event) => {
          orderHandler(event);
        }}
        btnType="Success"
      >
        ORDER
      </Button>
    </form>
  );
  if ( props.loading) {
    form = <Spinner />;
  }
  return (
    <div className={cssClasses.ContactData}>
      <h3>Enter your contact data ..!</h3>
      {form}
    </div>
  );
};
const inputChangedHandler = (event, inputIdentifier , orderForm , setOrderForm , seFormIsValid) => {
  let updatedElemnt = updateObject(orderForm[inputIdentifier], {
    value: event.target.value,
    valid: checkValidity(
      event.target.value,
      orderForm[inputIdentifier].validation
    ),
    touched: true,
  });

  const updatedOrderForm = updateObject(orderForm, {
    [inputIdentifier]: updatedElemnt,
  });
  let vld = true;
  for (let key in updatedOrderForm) {
    vld = updatedOrderForm[key].valid && vld;
  }
  setOrderForm({ orderForm: updatedOrderForm });
  seFormIsValid({ formIsValid: vld });
};
 

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
