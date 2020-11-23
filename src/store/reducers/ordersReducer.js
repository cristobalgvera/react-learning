import { ORDERS_ACTIONS } from "../actions/actionTypes";
import { updateState } from "../../shared/utility";

const { ORDERS_FETCH_FAIL, ORDERS_SET } = ORDERS_ACTIONS;

const initialState = {
  orders: null,
  error: false,
};

const ordersReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ORDERS_SET:
      return updateState(state, { ...initialState, orders: payload.orders });
    case ORDERS_FETCH_FAIL:
      return updateState(state, { ...initialState, error: true });
    default:
      return state;
  }
};

export default ordersReducer;
