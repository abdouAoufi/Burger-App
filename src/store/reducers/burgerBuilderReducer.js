import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

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
  building: false,
};

const addIngredient = (state, action) => {
  const updatedIngredient = updateObject(state.ingredients, {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  });
  const updatedState = {
    ingredients: updatedIngredient,
    totalPrice:
      state.totalPrice + state.INGREDIENT_PRICE[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIngredientR = updateObject(state.ingredients, {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  });
  const updatedStateR = {
    ingredients: updatedIngredientR,
    totalPrice:
      state.totalPrice - state.INGREDIENT_PRICE[action.ingredientName],
    building: true,
  };
  return updateObject(state, updatedStateR);
};

const getIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: action.ingredients,
    totalPrice: 4, //state.totalPrice + action.price,
    error: false,
    building: false,
  });
};

const errorOccured = () => {
  return {
    error: true,
  };
};

const burgerBuilder = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.GET_INGREDIENTS:
      return getIngredient(state, action);
    case actionTypes.ERROR_OCURRED:
      return errorOccured();
    default:
      return state;
  }
};

export default burgerBuilder;
