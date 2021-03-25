import React from "react";
import cssClasses from "./DrawerToggle.css";
export default function drawerToggle(props) {
  return (
    <div onClick={props.clicked} className={cssClasses.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
