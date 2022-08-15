import React from "react";
import "../css/Meaning.css";

function Meaning(props) {
  if (props.data) {
    return (
      <div className="Meaning">
        <p className="partOfSpeech">{props.data.partOfSpeech}</p>
        <p>Definition...</p>
      </div>
    );
  } else return null;
}
export default Meaning;
