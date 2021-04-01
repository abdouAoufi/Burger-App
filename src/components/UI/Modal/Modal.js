/* jshint ignore:start */
import React, { Component } from "react";
import cssClasses from "./Modal.css";
import BackDrop from "../BackDrop/BackDrop";
import Aux from "../../../hoc/Aux";

class modal extends Component {
  render() {
    return(
    <Aux>
      <BackDrop show={this.props.show} clicked={this.props.modalClosed} />
      <div
        className={cssClasses.Modal}
        style={{
          transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: this.props.show ? "1" : "0",
          
        }}
      >
        {this.props.children}
      </div>
    </Aux>
    );
  }
shouldComponentUpdate(nextProps , nextState){
  return nextProps.show !== this.props.show ;
}
};

export default modal;
