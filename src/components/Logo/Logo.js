import React from "react";
import cssClasses from "./Logo.css";

export default function (props) {
  return (
    <div className={cssClasses.Logo}>
      <img src={require("../../assets/logo.png")} alt="logo" />
    </div>
  );
}
