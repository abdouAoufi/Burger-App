import React from "react";
import cssClasses from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

export default function NavigationItems(props) {
  return (
    <div className={cssClasses.hideForMobile}>
      <ul
        // className={[cssClasses.NavigationItems, cssClasses.hideForMobile].join(
        //   " "
        // )}
        className={cssClasses.NavigationItems}
      >
        <NavigationItem link="/" active>
          {" "}
          Burger Builder
        </NavigationItem>
        <NavigationItem link="/"> Check out</NavigationItem>
      </ul>
    </div>
  );
}
