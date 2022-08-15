import React, { useState } from "react";
import "../css/Dictionary.css";
import axios from "axios";
import Results from "./Results";

function Dictionary() {
  const [word, setWord] = useState(undefined);
  const [data, setData] = useState(null);

  function handleChange(event) {
    setWord(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
    // Some words have multiple meanings (like "sun") so we'll show the only first one, which is the most common.
    setData(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          className="form-control"
          autoFocus
          autoComplete="off"
          placeholder="Search for a word"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary btn-sm">
          Search
        </button>
      </form>
      <Results data={data} />
    </div>
  );
}

export default Dictionary;
