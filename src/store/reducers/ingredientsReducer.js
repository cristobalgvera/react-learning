import { INGREDIENTS_ACTIONS } from '../actions/actionTypes';
import { updateState } from '../../shared/utility';

const {
    INGREDIENT_ADD,
    INGREDIENT_REMOVE,
    INGREDIENTS_FETCH_FAIL,
    INGREDIENTS_SET,
} = INGREDIENTS_ACTIONS;

const initialState = {
    ingredients: null,
    error: false,
};

const ingredientsReducer = ( state = initialState, { payload, type } ) => {
    switch (type) {
        case INGREDIENT_ADD:
            return addIngredient(state, payload);
        case INGREDIENT_REMOVE:
            return removeIngredient(state, payload);
        case INGREDIENTS_SET:
            return setIngredients(state, payload);
        case INGREDIENTS_FETCH_FAIL:
            return updateState(state, { error: true });
        default:
            return state;
    }
};

const setIngredients = ( state, payload ) => {
    const { ingredients } = payload;
    return updateState(state, {
        ingredients: ingredients,
    });
};

const addIngredient = ( state, payload ) => {
    const { ingredient } = payload;
    const { ingredients } = state;
    const updatedIngredients = {
        ...ingredients,
        [ingredient]: ingredients[ingredient] + 1,
    };
    return updateState(state, { ingredients: updatedIngredients });
};

const removeIngredient = ( state, payload ) => {
    const { ingredient } = payload;
    const { ingredients } = state;
    const updatedIngredients = {
        ...ingredients,
        [ingredient]: ingredients[ingredient] - 1,
    };
    return updateState(state, { ingredients: updatedIngredients });
};

export default ingredientsReducer;
