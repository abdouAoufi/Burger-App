import React from "react";
import cssClasses from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

export default function NavigationItems(props) {
  return (
    <div className={cssClasses.hideForMobile}>
      <ul className={cssClasses.NavigationItems}>
        <NavigationItem link="/">Burger Builder</NavigationItem>
        {props.isAuthenticated ? (
          <NavigationItem link="/orders"> Orders</NavigationItem>
        ) : null}

        {props.isAuthenticated ? (
          <NavigationItem link="/logout"> Log out</NavigationItem>
        ) : (
          <NavigationItem link="/auth"> Log in </NavigationItem>
        )}
      </ul>
    </div>
  );
}
