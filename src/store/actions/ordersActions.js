import { ORDERS_ACTIONS } from "./actionTypes";
import axios from "../../services/axios-orders";

const { FETCH_ORDERS_FAIL, SET_ORDERS } = ORDERS_ACTIONS;

const setOrders = (orders) => ({
  type: SET_ORDERS,
  payload: { orders: orders },
});

const fetchOrdersFailed = () => ({ type: FETCH_ORDERS_FAIL });

const initOrders = () => (dispatch) => {
  axios
    .get("/orders.json")
    .then(({ data: orders }) => {
      const _orders = [];
      for (let order in orders) _orders.push({ ...orders[order], id: order });
      dispatch(setOrders(_orders));
    })
    .catch((error) => dispatch(fetchOrdersFailed()));
};

export { initOrders };
