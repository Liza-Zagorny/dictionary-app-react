import React from "react";
import "../css/Definition.css";

function Definition(props) {
  if (props.data) {
    return (
      <div className="Definition">
        <p className="definition">{props.data.definition}</p>
      </div>
    );
  } else return null;
}
export default Definition;
