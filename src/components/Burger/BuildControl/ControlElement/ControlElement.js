/* jshint ignore:start */
import React from "react";
import cssClasses from "./ControlElement.css";

class ControlElement extends React.Component {
  render() {
    return (
      <div className={cssClasses.Element}>
        <p>{this.props.name}</p>
        <div className={cssClasses.innerParent}>
          <button onClick={this.props.clickMinus} >-</button>
          <p>{this.props.value}</p>
          <button onClick={this.props.clickPlus} >+</button>
          <span className={cssClasses.price}> {this.props.price}  </span>
          <span className={cssClasses.symbole}>$</span>
        </div>
      </div>
    );
  }


}
export default ControlElement;
