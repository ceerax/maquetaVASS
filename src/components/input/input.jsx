import React, { useState } from "react";
import "./input.scss";
const Input = ({ label }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(inputValue !== "");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="input-container">
      <label
        className={`input-label ${
          isFocused || inputValue !== "" ? "focused" : ""
        }`}
      >
        {label}
      </label>
      <input
        type="text"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        value={inputValue}
      />
      <div
        className={`input-line ${
          isFocused || inputValue !== "" ? "focused" : ""
        }`}
      ></div>
    </div>
  );
};

export default Input;
