import React from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import {
  add,
  decrement,
  deleteResult,
  increment,
  storeResult,
  subtract,
} from "../../store/actions/index";

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
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: (value) => dispatch(add(value)),
    onSubtractCounter: (value) => dispatch(subtract(value)),
    onStoreResult: (value) => dispatch(storeResult(value)),
    onDeleteResult: (id) => dispatch(deleteResult(id)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
