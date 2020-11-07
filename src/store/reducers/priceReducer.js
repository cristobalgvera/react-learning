import { PRICE_ACTIONS } from "../actions/priceActions";

const { CALCULATE_PRICE, RESET_PRICE } = PRICE_ACTIONS;

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
    case CALCULATE_PRICE:
      return { ...state, price: calculateActualPrice(payload.ingredients) };
    case RESET_PRICE:
      return { ...state, price: initialState.price };
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
