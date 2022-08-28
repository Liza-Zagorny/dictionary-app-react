import React, { useEffect, useState } from "react";
import "../css/Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

function Results(props) {
  const [phoneticData, setPhoneticData] = useState(undefined);
  useEffect(() => {
    if (props.data) {
      const withAudio = props.data.phonetics.find(
        (phonetic) => phonetic.audio && phonetic.text && phonetic.audio !== ""
      );
      const withTextOnly = props.data.phonetics.find(
        (phonetic) =>
          phonetic.text && (phonetic.audio === "" || !phonetic.audio)
      );
      setPhoneticData(withAudio ?? withTextOnly);
    }
  }, [props.data, phoneticData]);

  if (props.data) {
    return (
      <div className="Results">
        <h2>{props.data.word}</h2>
        <div>
          <Phonetic data={phoneticData} />
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
