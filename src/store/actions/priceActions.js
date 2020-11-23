import { PRICE_ACTIONS } from "./actionTypes";

const { PRICE_CALCULATE, PRICE_RESET } = PRICE_ACTIONS;

const calculatePrice = (ingredients) => ({
  type: PRICE_CALCULATE,
  payload: { ingredients: ingredients },
});

const resetPrice = () => ({ type: PRICE_RESET });

export { calculatePrice, resetPrice };
