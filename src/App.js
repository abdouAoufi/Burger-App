import React, { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    show: true,
    continue: false,
  };

  continueClicked = (ingredients) => {
    console.log("continue clicked this is appearing from APP.JS", ingredients);
  };

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout/" component={Checkout} />
            <Route path="/"  component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
