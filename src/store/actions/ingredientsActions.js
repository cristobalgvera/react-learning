import { INGREDIENTS_ACTIONS } from "./actionTypes";

const {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  RESET_INGREDIENTS,
} = INGREDIENTS_ACTIONS;

const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: { ingredient: ingredient },
});

const removeIngredient = (ingredient) => ({
  type: REMOVE_INGREDIENT,
  payload: { ingredient: ingredient },
});

const resetIngredients = () => ({ type: RESET_INGREDIENTS });

export { addIngredient, removeIngredient, resetIngredients };
