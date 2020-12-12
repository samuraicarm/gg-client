import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const search = new Request("./data.json");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState("");

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(search)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
        console.log(data);
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a game"
              value={query}
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className="results">
              {results.map((data) => (
                <li key={data.id}>
                  <ResultCard data={data} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
