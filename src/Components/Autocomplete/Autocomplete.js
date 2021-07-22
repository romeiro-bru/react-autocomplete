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
    setShowSuggestions(true);
  };

  const updateInput = (name) => {
    setSearch(name);
    setShowSuggestions(false);
  };

  const filtered = options.filter(
    ({ name }) => name.indexOf(search.toLowerCase()) > -1
  );

  return (
    <div className="inline-flex pos-rel">
      <input
        onChange={handleInputChange}
        onClick={handleSuggestions}
        value={search}
        placeholder=" Type to search"
      />
      {showSuggestions && (
        <div className="autocomplete-container">
          {filtered.map((item, index) => {
            return (
              <div
                onClick={() => updateInput(item.name)}
                className="options"
                key={index}
                tabIndex="0"
              >
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
