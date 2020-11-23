import { PRICE_ACTIONS } from "../actions/actionTypes";
import { updateState } from "../../shared/utility";

const { PRICE_CALCULATE, PRICE_RESET } = PRICE_ACTIONS;

const initialState = {
  price: 2000,
};

const PRICES = {
  bacon: 1200,
  meat: 1700,
  cheese: 1000,
  salad: 700,
};

const priceReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case PRICE_CALCULATE:
      return calculatePrice(state, payload);
    case PRICE_RESET:
      return updateState(state, { price: initialState.price });
    default:
      return state;
  }
};

const calculatePrice = (state, payload) => {
  const { ingredients } = payload;
  const updatedPrice = Object.keys(ingredients).reduce(
    (acc, cur) => acc + ingredients[cur] * PRICES[cur],
    initialState.price
  );
  return updateState(state, { price: updatedPrice });
};

export default priceReducer;
