import React, { useState } from 'react';
import './App.css'; // Importing the CSS file

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
    <div className="converter-container">
      <h1 className="title">Text Converter</h1>
      <textarea
        className="text-area"
        rows="4"
        cols="50"
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here"
      />
      <div className="button-container">
        <button className="convert-button" onClick={convertToLowerCase}>
          Convert to Lowercase
        </button>
        <button className="convert-button" onClick={convertToUpperCase}>
          Convert to Uppercase
        </button>
      </div>
    </div>
  );
}

export default TextConverter;
