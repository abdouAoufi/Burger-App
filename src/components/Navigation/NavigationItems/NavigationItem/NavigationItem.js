import React from "react";
import cssClasses from "./NavigationItem.css";
import {NavLink} from 'react-router-dom';

export default function NavigationItem(props) {
  return (
    <li className={cssClasses.NavigationItem}>
      <NavLink exact to={props.link} activeClassName={cssClasses.active}>
        {props.children}
      </NavLink>
    </li>
  );
}
 