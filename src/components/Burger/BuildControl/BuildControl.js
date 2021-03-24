/* jshint ignore:start */
import React, { Component } from "react";
import cssClasses from "./BuildControl.css";
import ControlElement from "./ControlElement/ControlElement";

class BuildControl extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <div className={cssClasses.BuildControlParent}>
        <div className={cssClasses.BuildControlInnerParent}>
          <ControlElement
            name="Cheese"
            clickPlus={() => {
              this.props.clickPlus("Cheese");
            }}
            clickMinus={() => {
              this.props.clickMinus("Cheese");
            }}
            value={this.props.ingredients.cheese}
            price={this.props.ingredientsPrice.cheese}
          />

          <ControlElement
            name="Meat"
            clickPlus={() => {
              this.props.clickPlus("Meat");
            }}
            clickMinus={() => {
              this.props.clickMinus("Meat");
            }}
            value={this.props.ingredients.meat}
            price={this.props.ingredientsPrice.meat}
          />

          <ControlElement
            name="Bacon"
            clickPlus={() => {
              this.props.clickPlus("Bacon");
            }}
            clickMinus={() => {
              this.props.clickMinus("Bacon");
            }}
            value={this.props.ingredients.bacon}
            price={this.props.ingredientsPrice.bacon}
          />

          <ControlElement
            name="Salad"
            clickPlus={() => {
              this.props.clickPlus("Salad");
            }}
            clickMinus={() => {
              this.props.clickMinus("Salad");
            }}
            value={this.props.ingredients.salad}
            price={this.props.ingredientsPrice.salad}
          />
        </div>
      </div>
    );
  }
}

export default BuildControl;
