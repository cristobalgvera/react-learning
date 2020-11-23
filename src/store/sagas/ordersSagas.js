import { put } from 'redux-saga/effects';
import { ordersActionsSagas } from '../actions';
import axios from '../../services/axiosInstance';
import { updateState } from '../../shared/utility';

const {
    setOrders,
    fetchOrdersFailed,
} = ordersActionsSagas;

const initOrdersSaga = function* ( { payload: { idToken, localId } } ) {
    const queryParams = `?auth=${idToken}&orderBy="localId"&equalTo="${localId}"`;
    const _orders = [];
    try {
        const { data: orders } = yield axios.get(`/orders.json${queryParams}`);
        for (let order in orders) _orders.push(updateState(orders[order], { id: order }));
        yield put(setOrders(_orders));
    } catch (error) {
        yield put(fetchOrdersFailed());
    }
};

export { initOrdersSaga };