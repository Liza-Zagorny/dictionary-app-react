import React from "react";
import "../css/Photos.css";
function Photos(props) {
  if (props.data) {
    return (
      <div className="Photos card">
        <div className="card-body">
          <div className="row">
            {props.data.map((photo, index) => {
              return (
                <div key={index} className="col-4">
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      alt={photo.alt}
                      height="95"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else return null;
}
export default Photos;
