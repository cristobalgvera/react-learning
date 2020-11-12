import { resultActions } from "../actions/actionTypes";
import { updateState } from "../utility";

const { STORE_RESULT, DELETE_RESULT } = resultActions;

const initialState = {
  results: [],
};

const resultReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case STORE_RESULT:
      return storeResult(state, payload);
    case DELETE_RESULT:
      return deleteResult(state, payload);
    default:
      return state;
  }
};

const storeResult = (state, payload) => {
  const { results } = state;
  const {
    result: { value },
  } = payload;
  const updatedResults = results.concat({
    id: Math.floor(Math.random() * 100),
    value: value,
  });
  return updateState(state, { results: updatedResults });
};

const deleteResult = (state, payload) => {
  const { results } = state;
  const {
    result: { id },
  } = payload;
  const updatedResults = results.filter((result) => result.id !== id);
  return updateState(state, { results: updatedResults });
};

export default resultReducer;
