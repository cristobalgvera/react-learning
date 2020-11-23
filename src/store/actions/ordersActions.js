import { ORDERS_ACTIONS } from './actionTypes';

const {
    ORDERS_FETCH_FAIL,
    ORDERS_SET,
    ORDERS_INIT_FETCH,
} = ORDERS_ACTIONS;

const setOrders = ( orders ) => ({
    type: ORDERS_SET,
    payload: { orders },
});

const fetchOrdersFailed = () => ({ type: ORDERS_FETCH_FAIL });

const initOrders = ( idToken, localId ) => ({
    type: ORDERS_INIT_FETCH,
    payload: { idToken, localId },
});

export { initOrders };
export const ordersActionsSagas = {
    setOrders,
    fetchOrdersFailed,
};