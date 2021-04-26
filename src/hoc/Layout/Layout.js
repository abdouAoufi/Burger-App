/* jshint ignore:start */
import React from "react";
import Aux from "../Aux";
import LayoutCss from "./layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar
          drawerToggleClick={this.sideDrawerHandler}
          isAuth={this.props.isAuthinticated}
        />
        <SideDrawer
         isAuth={this.props.isAuthinticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={LayoutCss.Content}>{this.props.children}</main>{" "}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthinticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
