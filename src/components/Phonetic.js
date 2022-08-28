import React from "react";
import "../css/Phonetic.css";

function Phonetic(props) {
  function handleListen(event) {
    event.preventDefault();
    const audio = new Audio(props.data.audio);
    audio.play();
  }
  if (
    props.data &&
    props.data.audio &&
    props.data.text &&
    props.data.audio !== ""
  )
    return (
      <span className="Phonetic">
        <button
          className="btn btn-primary btn-sm listen-btn"
          onClick={handleListen}
        >
          <i className="bi bi-play"></i>
        </button>
        {props.data.text}
      </span>
    );
  else if (
    props.data &&
    props.data.text &&
    (props.data.audio === "" || !props.data.audio)
  ) {
    return <span className="Phonetic">{props.data.text}</span>;
  } else return null;
}
export default Phonetic;
