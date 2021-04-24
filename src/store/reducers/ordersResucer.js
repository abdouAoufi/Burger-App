import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "./utility";

const initialState = {
  orders: [],
  loading: false,
  purchase: false,
};



const orders = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_START:
      return updateObject(state, { loading: true });
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
      };
      return updateObject(state, {
        loading: false,
        purchase: true,
        orders: state.orders.concat(newOrder),
      });

    case actionTypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false,
      };

    case actionTypes.PURCHASE_INIT:
      return updateObject(state, { purchase: false });

    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updateObject(state, { orders: action.orders });

    default:
      return state;
  }
};

export default orders;
