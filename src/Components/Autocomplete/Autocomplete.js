import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const url = "https://swapi.dev/api/people/";

export function Autocomplete() {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(url);
      setOptions(response.data.results);
    }
    return getData();
  }, []);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
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
              <div className="options" key={index}>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
