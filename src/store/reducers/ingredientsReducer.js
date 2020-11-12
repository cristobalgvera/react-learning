import { INGREDIENTS_ACTIONS } from "../actions/actionTypes";
import { updateState } from "../utility";

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
  switch (type) {
    case ADD_INGREDIENT:
      return addIngredient(state, payload);
    case REMOVE_INGREDIENT:
      return removeIngredient(state, payload);
    case RESET_INGREDIENTS:
      return updateState(state, {
        ingredients: { ...initialState.ingredients },
      });
    default:
      return state;
  }
};

const addIngredient = (state, payload) => {
  const { ingredient } = payload;
  const { ingredients } = state;
  const updatedIngredients = {
    ...ingredients,
    [ingredient]: ingredients[ingredient] + 1,
  };
  return updateState(state, { ingredients: updatedIngredients });
};

const removeIngredient = (state, payload) => {
  const { ingredient } = payload;
  const { ingredients } = state;
  const updatedIngredients = {
    ...ingredients,
    [ingredient]: ingredients[ingredient] - 1,
  };
  return updateState(state, { ingredients: updatedIngredients });
};

export default ingredientsReducer;
