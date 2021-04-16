import React from "react";
import cssClasses from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

export default function NavigationItems() {
  return (
    <div className={cssClasses.hideForMobile}>
      <ul className={cssClasses.NavigationItems}>
        <NavigationItem link="/" >
          Burger Builder
        </NavigationItem>
        <NavigationItem link="/orders"> Orders</NavigationItem>
      </ul>
    </div>
  );
}
