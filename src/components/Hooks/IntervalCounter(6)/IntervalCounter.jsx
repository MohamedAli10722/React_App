import React, { useState, useEffect } from "react";

function IntervalCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
    </div>
  );
}

export default IntervalCounter;
