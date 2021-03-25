import React from "react";
import cssClasses from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem"

export default function NavigationItems(props) {
  return (
    <ul className={cssClasses.NavigationItems}>
          <NavigationItem link="/" active> Burger Builder</NavigationItem>
          <NavigationItem link="/" > Check out</NavigationItem>
    </ul>
  );
}