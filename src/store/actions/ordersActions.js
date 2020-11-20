import { ORDERS_ACTIONS } from './actionTypes';
import axios from '../../services/axios-orders';

const { FETCH_ORDERS_FAIL, SET_ORDERS } = ORDERS_ACTIONS;

const setOrders = ( orders ) => ({
    type: SET_ORDERS,
    payload: { orders: orders },
});

const fetchOrdersFailed = () => ({ type: FETCH_ORDERS_FAIL });

const initOrders = ( idToken, localId ) => ( dispatch ) => {
    const queryParams = `?auth=${idToken}&orderBy="localId"&equalTo="${localId}"`;
    axios.get(`/orders.json${queryParams}`)
        .then(( { data: orders } ) => {
            const _orders = [];
            for (let order in orders) _orders.push({ ...orders[order], id: order });
            dispatch(setOrders(_orders));
        })
        .catch(( error ) => dispatch(fetchOrdersFailed()));
};

export { initOrders };
