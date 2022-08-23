import React from "react";
import "../css/Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h2>{props.data.word}</h2>
        <div>
          {props.data.phonetics.map((phonetic, index) => {
            return <Phonetic data={phonetic} key={index} />;
          })}
        </div>
        <div>
          {props.data.meanings.map((meaning, index) => {
            return <Meaning data={meaning} key={index} />;
          })}
        </div>
      </div>
    );
  } else return null;
}
export default Results;
