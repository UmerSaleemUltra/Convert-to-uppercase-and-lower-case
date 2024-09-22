import React, { useState } from 'react';

function TextConverter() {
  const [text, setText] = useState('');

  // Function to convert uppercase to lowercase
  const convertToLowerCase = () => {
    setText(text.toLowerCase());
  };

  // Function to convert lowercase to uppercase
  const convertToUpperCase = () => {
    setText(text.toUpperCase());
  };

  // Handle text input change
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Text Converter</h1>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here"
        style={{ padding: '10px', marginBottom: '10px' }}
      />
      <br />
      <button onClick={convertToLowerCase} style={{ marginRight: '10px', padding: '10px' }}>
        Convert to Lowercase
      </button>
      <button onClick={convertToUpperCase} style={{ padding: '10px' }}>
        Convert to Uppercase
      </button>
    </div>
  );
}

export default TextConverter;
