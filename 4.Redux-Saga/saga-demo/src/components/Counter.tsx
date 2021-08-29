import React from "react";
import useCounterActions from "../hooks/useCounterActions";
import useCounter from "../hooks/useCounter";

function Counter() {
  const counterActions = useCounterActions();
  const count = useCounter().count;

  return (
    <div>
      <h1>counter</h1>
      <div>{count}</div>
      <button onClick={() => counterActions.onPlus({})}>plus</button>
      <button onClick={() => counterActions.onMinus()}>minus</button>
      <button onClick={() => counterActions.onPlusRandom()}>plus random</button>
      <button onClick={() => counterActions.onPlusAfterOneSeconds()}>
        plus after one seconds
      </button>
    </div>
  );
}

export default Counter;
