import { INGREDIENTS_ACTIONS } from './actionTypes';

const {
    INGREDIENT_ADD,
    INGREDIENT_REMOVE,
    INGREDIENTS_FETCH_FAIL,
    INGREDIENTS_SET,
    INGREDIENTS_INIT_FETCH,
} = INGREDIENTS_ACTIONS;

const addIngredient = ( ingredient ) => ({
    type: INGREDIENT_ADD,
    payload: { ingredient: ingredient },
});

const removeIngredient = ( ingredient ) => ({
    type: INGREDIENT_REMOVE,
    payload: { ingredient: ingredient },
});

const resetIngredients = () => initIngredients();

const setIngredients = ( ingredients ) => ({
    type: INGREDIENTS_SET,
    payload: { ingredients: ingredients },
});

const fetchIngredientsFailed = () => ({ type: INGREDIENTS_FETCH_FAIL });

const initIngredients = () => ({ type: INGREDIENTS_INIT_FETCH });

export { addIngredient, removeIngredient, resetIngredients, initIngredients };
export const ingredientsActionsSagas = {
    setIngredients,
    fetchIngredientsFailed,
};
