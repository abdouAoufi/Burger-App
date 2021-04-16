import React from "react";
import cssClasses from "./Logo.css";

export default function (props) {
  return (
    <div className={cssClasses.Logo}>
      <a href="/">
        <img src={require("../../assets/logo.png")} alt="logo" />{" "}
      </a>
    </div>
  );
}
