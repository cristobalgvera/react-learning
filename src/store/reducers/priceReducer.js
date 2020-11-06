import { PRICE_ACTIONS } from "../actions/priceActions";

const { CALCULATE } = PRICE_ACTIONS;

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
    case CALCULATE:
      return { ...state, price: calculateActualPrice(payload.ingredients) };
    default:
      return state;
  }
};

const calculateActualPrice = (ingredients) =>
  Object.keys(ingredients).reduce(
    (acc, cur) => acc + ingredients[cur] * PRICES[cur],
    initialState.price
  );

export default priceReducer;
