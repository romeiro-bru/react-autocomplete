import React, { useState, useEffect } from "react";
import "./style.css";

const suggestions = ["White", "Black", "Green", "Blue", "Yellow", "Red"];

export function Autocomplete() {
  const [userInput, setUserInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(suggestions);
  }, []);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    console.log(userInput);
  };

  const handleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  return (
    <div className="inline-flex pos-rel">
      <input
        onChange={handleInputChange}
        onClick={handleSuggestions}
        name="name"
        placeholder=" Type to search"
      />
      {showSuggestions && (
        <div className="autocomplete-container">
          {options.map((item, index) => {
            return (
              <div className="option" key={index}>
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
