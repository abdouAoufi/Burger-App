import React from "react";
import cssClasses from "./NavigationItem.css";

export default function NavigationItem(props) {
  return (
    <li className={cssClasses.NavigationItem}>
      <a href={props.link} className={props.active ? cssClasses.active : null}>
        {props.children}
      </a>
    </li>
  );
}
