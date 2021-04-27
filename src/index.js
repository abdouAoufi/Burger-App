import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import burgerBuilderReducer from "./store/reducers/burgerBuilderReducer";
import ordersReducer from "./store/reducers/ordersReducer";
import authReducer from "./store/reducers/authReducer";
import thunk from "redux-thunk";
// import { process } from "postcss-flexbugs-fixes";

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: ordersReducer,
  auth: authReducer,
});

const logger = (store) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      return result;
    };
  };
};

const composeEnhancers =
  process.env.NODE_ENV === "developement"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);
const app = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
