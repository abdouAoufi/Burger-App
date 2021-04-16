import React, { Component } from "react";
import Order from "../Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/WithErrorHandler/WithErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((response) => {
        const data = response.data;
        const fetchedOrders = [];
        for (let key in data) {
          fetchedOrders.push({ ...data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => {
          //  console.log(order.ingredients);
          return <Order id={order.id} price={order.price} ingredients={order.ingredients} key={order.id} />;
        })}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
