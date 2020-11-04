import React, { useState } from "react";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        setCounter((prevState) => ++prevState);
        break;
      case "dec":
        setCounter((prevState) => --prevState);
        break;
      case "add":
        setCounter((prevState) => prevState + value);
        break;
      case "sub":
        setCounter((prevState) => prevState - value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <CounterOutput value={counter} />
      <CounterControl
        label="Increment"
        clicked={() => counterChangedHandler("inc")}
      />
      <CounterControl
        label="Decrement"
        clicked={() => counterChangedHandler("dec")}
      />
      <CounterControl
        label="Add 5"
        clicked={() => counterChangedHandler("add", 5)}
      />
      <CounterControl
        label="Subtract 5"
        clicked={() => counterChangedHandler("sub", 5)}
      />
    </div>
  );
};

export default Counter;
