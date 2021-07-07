import React, { useEffect, Suspense } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { Switch, Route } from "react-router-dom";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import asyncComponent from "./hoc/AsyncComponent/asyncComponent";

const Checkout = React.lazy(() => {
  return import("./containers/Checkout/Checkout");
});

const Auth = React.lazy(() => {
  return import("./containers/Auth/Auth");
});

const Orders = React.lazy(() => {
  return import("./containers/Orders/Orders");
});
const App = (props) => {
  useEffect(() => {
    props.onTryAutoSignUp();
  }, []);

  return (
    <div>
      <Layout>
        <Suspense fallback={<p>Loading ...</p>}>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/auth" exact render={() => <Auth />} />
            <Route
              path="/checkout"
              exact
              render={() => <Checkout  />}
            />
            <Route path="/orders" exact render={() => <Orders />} />
            <Route path="/logout" exact component={Logout} />
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
