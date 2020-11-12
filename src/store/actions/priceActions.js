import { PRICE_ACTIONS } from "./actionTypes";

const { CALCULATE_PRICE, RESET_PRICE } = PRICE_ACTIONS;

const calculatePrice = (ingredients) => ({
  type: CALCULATE_PRICE,
  payload: { ingredients: ingredients },
});

const resetPrice = () => ({ type: RESET_PRICE });

export { calculatePrice, resetPrice };
