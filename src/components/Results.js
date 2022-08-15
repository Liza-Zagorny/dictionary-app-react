import React from "react";
import "../css/Results.css";

function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <p>Meaning: {props.data[0].meanings[0].definitions[0].definition}</p>
      </div>
    );
  } else return null;
}
export default Results;
