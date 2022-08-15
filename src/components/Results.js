import React from "react";
import "../css/Results.css";
import Meaning from "./Meaning";

function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h2>{props.data.word}</h2>
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
