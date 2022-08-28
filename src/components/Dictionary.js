import React, { useState } from "react";
import "../css/Dictionary.css";
import axios from "axios";
import Results from "./Results";

function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleChange(event) {
    setWord(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
    // Some words have multiple meanings (like "sun") so we'll show the only first one, which is the most common.
    setData(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
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
  } else {
    load();
  }
}

export default Dictionary;
