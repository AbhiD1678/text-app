import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Text Input App</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={inputText}
        onChange={handleInputChange}
      />
      <p>You typed: {inputText}</p>
    </div>
  );
}

export default App;
