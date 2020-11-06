import axios from "../../services/axios-orders";
import { INGREDIENTS_ACTIONS } from "../actions/ingredientsActions";

const { ADD, REMOVE } = INGREDIENTS_ACTIONS;

const initialState = {
  ingredients: {
    bacon: 0,
    meat: 0,
    cheese: 0,
    salad: 0,
  },
};

const ingredientsReducer = (state = initialState, { payload, type }) => {
  const { ingredients } = state;
  switch (type) {
    case ADD:
      return {
        ...state,
        ingredients: addIngredientHandler(ingredients, payload.ingredient),
      };
    case REMOVE:
      return {
        ...state,
        ingredients: removeIngredientHandler(ingredients, payload.ingredient),
      };
    default:
      return state;
  }
};

const addIngredientHandler = (ingredients, ingredient) => ({
  ...ingredients,
  [ingredient]: ingredients[ingredient] + 1,
});

const removeIngredientHandler = (ingredients, ingredient) => {
  if (ingredients[ingredient] <= 0) {
    return;
  }
  return { ...ingredients, [ingredient]: ingredients[ingredient] - 1 };
};

export default ingredientsReducer;
