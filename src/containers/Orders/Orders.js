import React, { Component } from "react";
import Order from "../Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import orders from "../../store/reducers/ordersResucer";
class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentWillMount() {
    this.props.onFetchOrders(this.props.token);
  }
  // this.setState({ orders: this.props.orders });

  render() {
    let ordersComing = <h3 style={{ textAlign: "center" }}>loading .... </h3>;
    if (this.props.orders.length > 0) {
      ordersComing = this.props.orders.map((order) => {
        return (
          <Order
            id={order.id}
            price={order.price}
            ingredients={order.ingredients}
            key={order.id}
          />
        );
      });
    } else if (this.props.token === null) {
      ordersComing = (
        <h3 style={{ textAlign: "center", color: "red" }}>
          Error getting orders try to log in{" "}
        </h3>
      );
    }
    return <div>{ordersComing}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token) => dispatch(actions.fetchOrders(token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
