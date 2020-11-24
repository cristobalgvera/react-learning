import { INGREDIENTS_ACTIONS } from '../actions/actionTypes';

const {
    INGREDIENT_ADD,
    INGREDIENT_REMOVE,
    INGREDIENTS_SET,
} = INGREDIENTS_ACTIONS;

const initialIngredientsState = [];

const ingredientsReducer = ( state, { type, payload } ) => {
    switch (type) {
        case INGREDIENTS_SET:
            return setIngredients(state, payload);
        case INGREDIENT_ADD:
            return addIngredient(state, payload);
        case INGREDIENT_REMOVE:
            return removeIngredient(state, payload);
        default:
            throw new Error('Something went wrong :/');
    }
};

const removeIngredient = ( state, payload ) => {
    const { ingredient: { id } } = payload;
    return state.filter(ingredient => ingredient.id !== id);
};

const addIngredient = ( state, payload ) => {
    const { ingredient } = payload;
    return [...state, ingredient];
};

const setIngredients = ( state, payload ) => {
    const { ingredients } = payload;
    return [...ingredients];
};

export { initialIngredientsState };
export default ingredientsReducer;