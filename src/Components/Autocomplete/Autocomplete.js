import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const url = "https://swapi.dev/api/people/";

export function Autocomplete() {
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [options, setOptions] = useState([]);
  const [indexSuggestion, setIndexSuggestion] = useState(0);

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

  const updateInput = (name) => {
    setSearch(name);
    setShowSuggestions(false);
  };

  const handleArrowKey = (e) => {
    if (e.keyCode === 13) {
      if (indexSuggestion > 9) {
        return setIndexSuggestion(0);
      }
      setSearch(options[indexSuggestion].name);
      setIndexSuggestion(0);
    } else if (e.keyCode === 38 || e.keyCode === 37) {
      if (indexSuggestion === 0) {
        return;
      }
      setIndexSuggestion(indexSuggestion - 1);
    } else if (e.keyCode === 40 || e.keyCode === 39) {
      if (indexSuggestion - 1 === options.length) {
        return;
      } else if (indexSuggestion > 9) {
        return setIndexSuggestion(0);
      }
      setIndexSuggestion(indexSuggestion + 1);
    }
  };

  const filtered = options.filter(
    ({ name }) => name.indexOf(search.toLowerCase()) > -1
  );

  return (
    <section className="inline-flex pos-rel">
      <input
        onChange={handleInputChange}
        onClick={handleSuggestions}
        onKeyDown={handleArrowKey}
        value={search}
        placeholder=" Type to search"
      />
      {showSuggestions && (
        <div className="autocomplete-container">
          {filtered.map((item, index) => {
            let active = "";
            if (index === indexSuggestion) {
              active = "active-suggestion";
            }
            return (
              <div
                onClick={() => updateInput(item.name)}
                className={`options ${active}`}
                key={index}
              >
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
