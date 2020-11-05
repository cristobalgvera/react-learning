import { resultActions } from "../actions";

const { STORE_RESULT, DELETE_RESULT } = resultActions;

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  const { results } = state;
  const { payload } = action;
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        results: results.concat({
          id: Math.floor(Math.random() * 100),
          value: payload.result.value,
        }),
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

export default resultReducer;
