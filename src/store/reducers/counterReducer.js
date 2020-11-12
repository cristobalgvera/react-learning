import { counterActions } from "../actions/actionTypes";
import { updateState } from "../utility";

const { INCREMENT, DECREMENT, ADD, SUBTRACT } = counterActions;

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  const { counter } = state;
  const { payload } = action;
  switch (action.type) {
    case INCREMENT:
      return updateState(state, { counter: counter + 1 });
    case DECREMENT:
      return updateState(state, { counter: counter - 1 });
    case ADD:
      return updateState(state, { counter: counter + payload.value });
    case SUBTRACT:
      return updateState(state, { counter: counter - payload.value });
    default:
      return state;
  }
};

export default counterReducer;
