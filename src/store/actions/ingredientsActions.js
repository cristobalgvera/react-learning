import { INGREDIENTS_ACTIONS } from './actionTypes';

const {
    INGREDIENTS_SET,
    INGREDIENT_REMOVE,
    INGREDIENT_ADD,
} = INGREDIENTS_ACTIONS;

const setIngredients = ( ingredients ) => ({
    type: INGREDIENTS_SET,
    payload: { ingredients },
});

const removeIngredient = ( id ) => ({
    type: INGREDIENT_REMOVE,
    payload: { ingredient: { id } },
});

const addIngredient = ( ingredient ) => ({
    type: INGREDIENT_ADD,
    payload: { ingredient },
});

export { setIngredients, removeIngredient, addIngredient };