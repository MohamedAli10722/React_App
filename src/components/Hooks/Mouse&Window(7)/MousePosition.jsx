import React, { useState, useEffect } from 'react';

function MousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseClick = () => {
      setClickCount((prevCount) => prevCount + 1);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleMouseClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <div>
      Mouse Position: ({mousePosition.x}, {mousePosition.y})
      <br />
      Click Count: {clickCount}
    </div>
  );
}

export default MousePosition;
