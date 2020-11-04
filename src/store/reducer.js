import { counterActions } from "./storeActions";

const {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT,
  STORE_RESULT,
  DELETE_RESULT,
} = counterActions;

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  const { counter, results } = state;
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
    case STORE_RESULT:
      return {
        ...state,
        results: results.concat({ id: new Date(), value: counter }),
      };
    case DELETE_RESULT:
      return {
        ...state,
        results: results.filter((result) => result.id !== payload.result.id),
      };
    default:
      return state;
  }
};

export default reducer;
