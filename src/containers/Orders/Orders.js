import React, { Component, useState, useEffect } from "react";
import Order from "../Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
const Orders = (props) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    props.onFetchOrders(props.token, props.userId);
  }, []);

  let ordersComing = <h3 style={{ textAlign: "center" }}>loading .... </h3>;
  if (props.orders.length > 0) {
    ordersComing = props.orders.map((order) => {
      return (
        <Order
          id={order.id}
          price={order.price}
          ingredients={order.ingredients}
          key={order.id}
        />
      );
    });
  } else if (props.token === null) {
    ordersComing = (
      <h3 style={{ textAlign: "center", color: "red" }}>
        Error getting orders try to log in{" "}
      </h3>
    );
    setTimeout(() => {
      props.history.replace("/");
    }, 1000);
  }
  return <div>{ordersComing}</div>;
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token, userId) =>
      dispatch(actions.fetchOrders(token, userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
