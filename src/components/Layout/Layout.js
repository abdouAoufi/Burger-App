/* jshint ignore:start */
import React from "react";
import Aux from "../../hoc/Aux";
import LayoutCss from "./layout.css";

const layout = (props) => (
  <Aux>
    <div>Toolbar , SideDrawer , Bakckdrop </div>
    <main className={LayoutCss.Content}>{props.children}</main>
  </Aux>
);

export default layout;
