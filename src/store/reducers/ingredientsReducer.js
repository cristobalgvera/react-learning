import axios from "../../services/axios-orders";
import { INGREDIENTS_ACTIONS } from "../actions/ingredientsActions";

const {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  RESET_INGREDIENTS,
} = INGREDIENTS_ACTIONS;

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
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: addIngredientHandler(ingredients, payload.ingredient),
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: removeIngredientHandler(ingredients, payload.ingredient),
      };
    case RESET_INGREDIENTS:
      return {
        ...state,
        ingredients: { ...initialState.ingredients },
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
