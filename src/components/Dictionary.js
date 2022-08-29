import React, { useState } from "react";
import "../css/Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [dictionaryData, setDictionaryData] = useState(null);
  const [photosData, setPhotosData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(event) {
    setWord(event.target.value);
  }

  function handleDictionaryResponse(response) {
    //console.log(response.data);
    // Some words have multiple meanings (like "sun") so we'll show the only first one, which is the most common.
    setDictionaryData(response.data[0]);
  }

  function handlePexelsResponse(response) {
    //console.log(response.data);
    setPhotosData(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    setError(false);
  }
  function search() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleDictionaryResponse).catch(setError(true));

    let pexelsApiKey =
      "563492ad6f9170000100000123b76e0be54b4e3883f9e14afbdc168c";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${word}`;
    if (!!error) {
      axios
        .get(pexelsUrl, {
          headers: { Authorization: `Bearer ${pexelsApiKey}` },
        })
        .then(handlePexelsResponse);
    }
  }

  function load() {
    setLoaded(true);
    search();
  }

  console.log(error);

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
        <div className="err-msg">
          Seems like we don't have any definition for "{word}", please try
          another one.
        </div>
        <Results data={dictionaryData} />

        <Photos data={photosData} />
      </div>
    );
  } else {
    load();
  }
}

export default Dictionary;
