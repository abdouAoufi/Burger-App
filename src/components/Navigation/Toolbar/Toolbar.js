import React from "react";
import cssClasses from "./Toolbar.css";
import Headroom from "react-headroom";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

export default function Toolbar(props) {
  return (
    <Headroom>
      <header className={cssClasses.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
          <NavigationItems />
        </nav>
      </header>
    </Headroom>
  );
}
