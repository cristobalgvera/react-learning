import { counterActions } from "../actions";

const { INCREMENT, DECREMENT, ADD, SUBTRACT } = counterActions;

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  const { counter } = state;
  const { payload } = action;
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: counter + 1 };
    case DECREMENT:
      return { ...state, counter: counter - 1 };
    case ADD:
      return { ...state, counter: counter + payload.value };
    case SUBTRACT:
      return { ...state, counter: counter - payload.value };
    default:
      return state;
  }
};

export default counterReducer;
