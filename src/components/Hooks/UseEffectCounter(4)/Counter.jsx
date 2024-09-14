import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Component rendered. Current count is: ${count}`);
  });

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={buttonStyle}>
        Increment
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "18px",
  borderRadius: "5px",
  border: "1px solid gray",
  background: "#f0f0f0",
  cursor: "pointer",
};

export default Counter;