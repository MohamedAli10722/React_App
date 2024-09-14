import React, { useState } from "react";

const ButtonsHooks = () => {
  const [count, setCount] = useState(0); 

  const increment = () => {
    setCount(count + 1); 
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1); 
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <button onClick={decrement} style={buttonStyle}>
        -
      </button>
      <span style={{ margin: "0 20px", fontSize: "24px" }}>{count}</span>
      <button onClick={increment} style={buttonStyle}>
        +
      </button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "12px",
  borderRadius: "5px",
  border: "1px solid gray",
  background: "#f0f0f0",
  cursor: "pointer",
};

export default ButtonsHooks;
