import React, { useState } from "react";
import "../css/Dictionary.css";

function Dictionary() {
  const [word, setWord] = useState(null);

  function handleChange(event) {
    setWord(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          className="form-control"
          autoFocus
          autoComplete="off"
          value={word}
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
