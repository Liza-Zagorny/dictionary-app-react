import React from "react";
import "../css/Dictionary.css";

function Dictionary() {
  function search(event) {
    event.preventDefault();
    alert("Searching");
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default Dictionary;
