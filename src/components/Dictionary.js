import React, { useState } from "react";
import "../css/Dictionary.css";
import axios from "axios";

function Dictionary() {
  const [word, setWord] = useState(undefined);

  function handleChange(event) {
    setWord(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
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
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary btn-sm">
          Search
        </button>
      </form>
    </div>
  );
}

export default Dictionary;
