import { counterActions } from "./actionTypes";

const { INCREMENT, DECREMENT, ADD, SUBTRACT } = counterActions;

const increment = () => ({ type: INCREMENT });

const decrement = () => ({ type: DECREMENT });

const add = (value) => ({
  type: ADD,
  payload: { value: value },
});

const subtract = (value) => ({
  type: SUBTRACT,
  payload: { value: value },
});

export { increment, decrement, add, subtract };
