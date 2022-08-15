import React from "react";
import "../css/Meaning.css";
import Definition from "./Definition";

function Meaning(props) {
  if (props.data) {
    return (
      <div className="Meaning card">
        <div className="card-body">
          <p className="partOfSpeech">{props.data.partOfSpeech}</p>
          {props.data.definitions.map((definition, index) => {
            return <Definition data={definition} key={index} />;
          })}
        </div>
      </div>
    );
  } else return null;
}
export default Meaning;
