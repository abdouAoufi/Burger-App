import * as actionTypes from "../actions/actionTypes";
const initialState = {
  ingredients: null,
  INGREDIENT_PRICE: {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
  },
  totalPrice: 4,
  error: false,
};

const burgerBuilder = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice:
          state.totalPrice + state.INGREDIENT_PRICE[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice:
          state.totalPrice - state.INGREDIENT_PRICE[action.ingredientName],
      };
    case actionTypes.GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: state.totalPrice + action.price,
        error: false,
      };

    case actionTypes.ERROR_OCURRED:
      return {
        error: true,
      };

    default:
      return state;
  }
};

export default burgerBuilder;
