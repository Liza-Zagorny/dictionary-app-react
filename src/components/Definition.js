import React from "react";
import "../css/Definition.css";

function Definition(props) {
  if (props.data) {
    return (
      <div className="Definition">
        <p className="definition">{props.data.definition}</p>
        {props.data.example ? (
          <p className="example">Example: {props.data.example}</p>
        ) : null}
        {props.data.synonyms.length > 0 ? (
          <p className="synonyms">
            Synonyms:{" "}
            {props.data.synonyms.map((synonym, index) => {
              return <li key={index}>{synonym}</li>;
            })}
          </p>
        ) : null}
      </div>
    );
  } else return null;
}
export default Definition;
