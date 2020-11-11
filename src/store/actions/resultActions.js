import { resultActions } from "./actionTypes";

const { STORE_RESULT, DELETE_RESULT } = resultActions;

const saveResult = (value) => ({
  type: STORE_RESULT,
  payload: { result: { value: value } },
});

// Try to not overuse getState(), instead, if certain state is needed,
// request for it like an argument parameter
const storeResult = (value) => (dispatch, getState) => {
  setTimeout(() => {
    const {
      counterReducer: { counter },
    } = getState();
    console.log(counter);
    dispatch(saveResult(value));
  }, 2000);
};

const deleteResult = (id) => ({
  type: DELETE_RESULT,
  payload: { result: { id: id } },
});

export { storeResult, deleteResult };
