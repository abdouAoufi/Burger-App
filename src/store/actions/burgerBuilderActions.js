// actions for burger builder
import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

const INGREDIENT_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name,
  };
};

export const setIngredients = (ingredients, price) => {
  return {
    type: actionTypes.GET_INGREDIENTS,
    ingredients: ingredients,
    price: price,
  };
};

const errorIngredients = () => {
  return {
    type: actionTypes.ERROR_OCURRED,
  };
};
export const initIngredients = () => {
  return (dispatch) => {
    let ing = null;
    axios
      .get(
        "https://burger-builder-70b3b-default-rtdb.firebaseio.com/ingredients.json"
      )
      .then((response) => {
        let price = 0;
        ing = response.data;
        Object.keys(ing).forEach((singleIngrident) => {
          price += INGREDIENT_PRICE[singleIngrident] * ing[singleIngrident];
        });
        console.log(price);
        dispatch(setIngredients(ing, price));
      })
      .catch((error) => {
        dispatch(errorIngredients());
      });
  };
};
