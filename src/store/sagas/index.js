import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import {
    authenticationLogoutSaga,
    initAuthenticationSaga,
    checkAuthStateSaga,
} from './authSagas';
import {
    initIngredientsSaga,
} from './ingredientsSagas';
import {
    initOrdersSaga,
} from './ordersSagas';
import { AUTH_ACTIONS, INGREDIENTS_ACTIONS, ORDERS_ACTIONS } from '../actions/actionTypes';

const {
    AUTH_INITIATE_LOGOUT,
    AUTH_USER,
    AUTH_CHECK_INITIAL_STATE,
} = AUTH_ACTIONS;

const {
    INGREDIENTS_INIT_FETCH,
} = INGREDIENTS_ACTIONS;

const {
    ORDERS_INIT_FETCH,
} = ORDERS_ACTIONS;

const watchAuth = function* () {
    yield all([
        takeEvery(AUTH_INITIATE_LOGOUT, authenticationLogoutSaga),
        takeEvery(AUTH_CHECK_INITIAL_STATE, checkAuthStateSaga),
        takeEvery(AUTH_USER, initAuthenticationSaga),
    ]);
};

const watchIngredients = function* () {
    yield all([
        takeEvery(INGREDIENTS_INIT_FETCH, initIngredientsSaga),
    ]);
};

const watchOrders = function* () {
    yield all([
        takeLatest(ORDERS_INIT_FETCH, initOrdersSaga),
    ]);
};

export { watchAuth, watchIngredients, watchOrders };