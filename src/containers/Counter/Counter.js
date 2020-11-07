import React from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import { counterActions, resultActions } from "../../store/actions";

const { INCREMENT, DECREMENT, ADD, SUBTRACT } = counterActions;
const { STORE_RESULT, DELETE_RESULT } = resultActions;

const Counter = ({ reduxCounterStates, reduxCounterActions }) => {
  const { counter, storedResults } = reduxCounterStates;
  const {
    onIncrementCounter,
    onDecrementCounter,
    onAddCounter,
    onSubtractCounter,
    onDeleteResult,
    onStoreResult,
  } = reduxCounterActions;

  return (
    <div>
      <CounterOutput value={counter} />
      <CounterControl label="Increment" clicked={onIncrementCounter} />
      <CounterControl label="Decrement" clicked={onDecrementCounter} />
      <CounterControl label="Add 5" clicked={() => onAddCounter(5)} />
      <CounterControl label="Subtract 5" clicked={() => onSubtractCounter(5)} />
      <hr />
      <button onClick={() => onStoreResult(counter)}>Store result</button>
      <ul>
        {storedResults.map(({ id, value }) => (
          <li key={id} onClick={() => onDeleteResult(id)}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({
  counterReducer: { counter },
  resultsReducer: { results },
}) => {
  return {
    reduxCounterStates: {
      counter: counter,
      storedResults: results,
    },
  };
};

const mapDispatchToProps = (dispatch) => ({
  reduxCounterActions: {
    onIncrementCounter: () => dispatch({ type: INCREMENT }),
    onDecrementCounter: () => dispatch({ type: DECREMENT }),
    onAddCounter: (value) => dispatch({ type: ADD, payload: { value: value } }),
    onSubtractCounter: (value) =>
      dispatch({ type: SUBTRACT, payload: { value: value } }),
    onStoreResult: (value) =>
      dispatch({ type: STORE_RESULT, payload: { result: { value: value } } }),
    onDeleteResult: (id) =>
      dispatch({ type: DELETE_RESULT, payload: { result: { id: id } } }),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
