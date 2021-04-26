import React from "react";
import cssClasses from "./Toolbar.css";
import Headroom from "react-headroom";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

export default function Toolbar(props) {
  return (
    <Headroom>
      <header className={cssClasses.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClick} />
        <div className={cssClasses.Logo}>
          <Logo />
        </div>
        <nav className={cssClasses.hideForMobile}>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </header>
    </Headroom>
  );
}
