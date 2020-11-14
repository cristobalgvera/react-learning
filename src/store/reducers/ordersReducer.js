import { ORDERS_ACTIONS } from "../actions/actionTypes";
import { updateState } from "../utility";

const { FETCH_ORDERS_FAIL, SET_ORDERS } = ORDERS_ACTIONS;

const initialState = {
  orders: null,
  error: false,
};

const ordersReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_ORDERS:
      return updateState(state, { ...initialState, orders: payload.orders });
    case FETCH_ORDERS_FAIL:
      return updateState(state, { ...initialState, error: true });
    default:
      return state;
  }
};

export default ordersReducer;
