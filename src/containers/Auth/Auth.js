import React, { Component } from "react";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import cssClasses from "./Auth.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Your password",
        },
        value: "",
        validation: {
          minLength: 7,
          required: true,
          isPassword: true,
        },
        valid: false,
        touched: false,
      },
    },
    isSignUp: true,
  };

  componentDidMount() {
    if (!this.props.buidingBurger) {
      // this.props.onSetAuthRedirectPath();
    }
  }

  swithAuthModeHandler = () => {
    this.setState((prevState) => {
      return { isSignUp: !prevState.isSignUp };
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignUp
    );
  };

  render() {
    let toCheckout = false;
    for (let key in this.props.ings) {
      toCheckout = this.props.ings[key] > 0;
    }
    let redirect = null;
    if (this.props.isAuthenticated) {
      if (toCheckout) {
        redirect = <Redirect to="/checkout" />;
      } else {
        redirect = <Redirect to="/" />;
      }
    }
    const formElemntArray = [];
    for (let key in this.state.controls) {
      formElemntArray.push({
        id: key,
        setup: this.state.controls[key],
      });
    }

    let form = null;
    if (this.props.loading) {
      form = <Spinner />;
    }

    form = formElemntArray.map((formElement) => (
      <Input
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
    ));
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = (
        <h4 style={{ color: "red" }}>{this.props.error.message}</h4>
      );
    }

    return (
      <div className={cssClasses.Auth}>
        {redirect}
        <h4 style={{ color: "green" }}>
          {!this.state.isSignUp ? " LOG IN" : "SIGN UP"}
        </h4>
        {errorMessage}
        <form onSubmit={this.onSubmitHandler}>
          {form}
          <Button btnType="Success">Submit</Button>
        </form>
        <Button clicked={this.swithAuthModeHandler} btnType="Danger">
          SWITH TO {this.state.isSignUp ? " SIGN IN" : "SIGN UP"}
        </Button>
      </div>
    );
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidation(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    };
    this.setState({ controls: updatedControls });
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
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    buidingBurger: state.burgerBuilder.buiding,
    ings: state.burgerBuilder.ingredients,
    authRedirect: state.auth.authRedirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
