import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  const addValue = () => {
    const newCount = count + Number(value);
    setCount(newCount);
  };
  const subtractValue = () => {
    const subCount = count - value;
    setCount(Number(subCount));
  };
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  console.log("value entered: ", value);

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      {count >= 100 ? (
        <h3 data-testid="count" style={{ color: "green" }}>
          {count}
        </h3>
      ) : count <= -10 ? (
        <h3 data-testid="count" style={{ color: "red" }}>
          {count}
        </h3>
      ) : (
        <h3 data-testid="count">{count}</h3>
      )}
      <button data-testid="add-btn" onClick={addValue}>
        +
      </button>
      <input
        type="number"
        data-testid="input"
        style={{ textAlign: "center" }}
        defaultValue={value}
        onChange={changeValue}
      />
      <button data-testid="subtract-btn" onClick={subtractValue}>
        -
      </button>
    </div>
  );
};

export default Counter;
