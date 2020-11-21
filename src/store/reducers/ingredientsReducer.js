import { INGREDIENTS_ACTIONS } from '../actions/actionTypes';
import { updateState } from '../../shared/utility';

const {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    FETCH_INGREDIENTS_FAIL,
    SET_INGREDIENTS,
} = INGREDIENTS_ACTIONS;

const initialState = {
    ingredients: null,
    error: false,
};

const ingredientsReducer = ( state = initialState, { payload, type } ) => {
    switch (type) {
        case ADD_INGREDIENT:
            return addIngredient(state, payload);
        case REMOVE_INGREDIENT:
            return removeIngredient(state, payload);
        case SET_INGREDIENTS:
            return setIngredients(state, payload);
        case FETCH_INGREDIENTS_FAIL:
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
