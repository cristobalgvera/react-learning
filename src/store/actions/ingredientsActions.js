import { INGREDIENTS_ACTIONS } from "./actionTypes";
import axios from "../../services/axios-orders";

const {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  FETCH_INGREDIENTS_FAIL,
  SET_INGREDIENTS,
} = INGREDIENTS_ACTIONS;

const addIngredient = (ingredient) => ({
  type: ADD_INGREDIENT,
  payload: { ingredient: ingredient },
});

const removeIngredient = (ingredient) => ({
  type: REMOVE_INGREDIENT,
  payload: { ingredient: ingredient },
});

const resetIngredients = () => initIngredients();

const setIngredients = (ingredients) => ({
  type: SET_INGREDIENTS,
  payload: { ingredients: ingredients },
});

const fetchIngredientsFailed = () => ({ type: FETCH_INGREDIENTS_FAIL });

const initIngredients = () => (dispatch) => {
  axios
    .get("/ingredients.json")
    .then(({ data: ingredients }) => dispatch(setIngredients(ingredients)))
    .catch((error) => dispatch(fetchIngredientsFailed()));
};

export { addIngredient, removeIngredient, resetIngredients, initIngredients };
