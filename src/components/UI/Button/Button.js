/* jshint ignore:start */

import React from "react";
// import Aux from "../../../hoc/Aux";
import cssClasses from "./Button.css";

const button = (props) => (
  <button
    onClick={props.clicked}
    className={[cssClasses.Button, cssClasses[props.btnType]].join(' ')} 
  >
    {props.children}
  </button>
);

export default button;
