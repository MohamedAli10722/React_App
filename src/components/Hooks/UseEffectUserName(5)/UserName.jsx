import React, { useState, useEffect } from 'react';

const Name = () => {
  const [username, setUsername] = useState(''); 
  const [greeting, setGreeting] = useState(''); 
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setUsername(newValue);


    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeoutId = setTimeout(() => {
      setGreeting(newValue ? `Hello, ${newValue}!` : ''); 
    }, 500); 

    setTypingTimeout(timeoutId);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={handleInputChange}
        style={inputStyle}
      />
      <h3>{greeting}</h3>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid gray',
  marginTop: '10px',
};

export default Name;