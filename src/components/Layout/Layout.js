/* jshint ignore:start */
import React from "react";
import Aux from "../../hoc/Aux";
import LayoutCss from "./layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={LayoutCss.Content}>{props.children}</main>{" "}
    {/* ! This in fact will be the BuildBurger Component */}
  </Aux>
);

export default layout;
