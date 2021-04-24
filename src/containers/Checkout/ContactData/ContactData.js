import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import cssClasses from "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import InputElement from "../../../components/UI/Input/Input";
import { connect } from "react-redux";
import withErrorHandler from "../../../hoc/WithErrorHandler/WithErrorHandler";
import * as actions from "../../../store/actions/orderActions";
class ContactData extends Component {
  state = {
    loading: false,
    orderForm: {
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
      // street: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "Street",
      //   },
      //   value: "",
      //   validation: {
      //     required: true,
      //     minLength: 5,
      //     maxLength: 15,
      //     hasNum: true,
      //   },
      //   valid: false,
      //   touched: false,
      // },
      // zipCode: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "zip code",
      //   },
      //   value: "",
      //   validation: {
      //     required: true,
      //     minLength: 5,
      //     maxLength: 5,
      //     hasNum: true,
      //   },
      //   valid: false,
      //   touched: false,
      // },
      // country: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "Country",
      //   },
      //   value: "",
      //   validation: {
      //     required: true,
      //     minLength: 5,
      //     maxLength: 10,
      //     hasNum: false,
      //   },
      //   valid: false,
      //   touched: false,
      // },
      // deliveryMethod: {
      //   elementType: "select",
      //   elementConfig: {
      //     option: [
      //       { value: "fastest", displayValue: "Fastest" },
      //       { value: "cheapest", displayValue: "Cheapest" },
      //     ],
      //   },
      //   value: "fastest",
      //   valid: true,
      //   validation: {
      //     required: false,
      //   },
      // },
    },
    formIsValid: false,
  };

  checkValidation(value, rules) {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== "";
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength;
      if (rules.maxLength && isValid) {
        isValid = value.length <= rules.maxLength;
        if (!isValid) console.log("max length reached");
      }
    }
    return isValid;
  }
  orderHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData,
    };
    this.props.onOrderBurger(order);
  };

  sendDataToServer = (orderData) => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData,
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.replace("/");
      })
      .catch((error) => {});
  };

  render() {
    const formElemntArray = [];
    for (let key in this.state.orderForm) {
      formElemntArray.push({
        id: key,
        setup: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElemntArray.map((formElement) => (
          <InputElement
            changed={(event) => {
              this.inputChangedHandler(event, formElement.id);
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
          disabled={!this.state.formIsValid}
          clicked={(event) => {
            this.orderHandler(event);
          }}
          btnType="Success"
        >
          ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return (
      <div className={cssClasses.ContactData}>
        <h3>Enter your contact data ..!</h3>
        {form}
      </div>
    );
  }
  inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...this.state.orderForm, // ?  first clone {left side }
    };
    const updatedElemnt = {
      ...updatedOrderForm[inputIdentifier], // ?  deep clone  {right side}
    };
    updatedElemnt.value = event.target.value;
    updatedElemnt.valid = this.checkValidation(
      updatedElemnt.value,
      updatedElemnt.validation
    );
    updatedElemnt.touched = true;
    updatedOrderForm[inputIdentifier] = updatedElemnt;
    let vld = true;
    for (let key in updatedOrderForm) {
      vld = updatedOrderForm[key].valid && vld;
    }
    this.setState({ orderForm: updatedOrderForm });
    this.setState({ formIsValid: vld });
  };
  hasNumber(myString) {
    return /\d/.test(myString);
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
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
