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
    this.props.onFetchOrders();
  }
  // this.setState({ orders: this.props.orders });
  
  
  render() {
    console.log(this.state.orders);
    return (
      <div>
        {this.props.orders.map((order) => {
          //  console.log(order.ingredients);
          return (
            <Order
              id={order.id}
              price={order.price}
              ingredients={order.ingredients}
              key={order.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
