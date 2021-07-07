/* jshint ignore:start */
import React, { useState, useEffect } from "react";
import Aux from "../Aux";
import LayoutCss from "./layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

const Layout = (props) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };
  const sideDrawerHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };
  return (
    <Aux>
      <Toolbar
        drawerToggleClick={sideDrawerHandler}
        isAuth={props.isAuthinticated}
      />
      <SideDrawer
        isAuth={props.isAuthinticated}
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className={LayoutCss.Content}>{props.children}</main>{" "}
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthinticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
