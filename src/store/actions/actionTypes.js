const INGREDIENTS_ACTIONS = {
    ADD_INGREDIENT: 'ADD_INGREDIENT',
    REMOVE_INGREDIENT: 'REMOVE_INGREDIENT',
    SET_INGREDIENTS: 'SET_INGREDIENTS',
    FETCH_INGREDIENTS_FAIL: 'FETCH_INGREDIENTS_FAIL',
};

const PRICE_ACTIONS = {
    CALCULATE_PRICE: 'CALCULATE_PRICE',
    RESET_PRICE: 'RESET_PRICE',
};

const ORDERS_ACTIONS = {
    SET_ORDERS: 'SET_ORDERS',
    FETCH_ORDERS_FAIL: 'FETCH_ORDERS_FAIL',
};

const AUTH_ACTIONS = {
    AUTH_START: 'AUTH_START',
    AUTH_SUCCESS: 'AUTH_SUCCESS',
    AUTH_FAIL: 'AUTH_FAIL',
    AUTH_LOGOUT: 'AUTH_LOGOUT',
    LOCAL_AUTH_CHECKED: 'LOCAL_AUTH_CHECKED',
};

export { INGREDIENTS_ACTIONS, PRICE_ACTIONS, ORDERS_ACTIONS, AUTH_ACTIONS };
