import React from "react";
// import React, { Component } from "react";
import "./Test.css";

function Test(props) {
  //   console.log("Outside if  ", props);

  if (props.currentItems.status === 200) {
    // console.log("Inside if  : ", props.currentItems.status);
    let list = props.currentItems.data.map((Z) => {
      return (
        <div key={Math.random()} className="col test_container">
          <p className="test_Title">{Z.meta.id.split(":")[0]}</p>
          <p className="test_tag">
            Type: <span className="test_info">{Z.fl}</span>
          </p>
          <p className="test_tag">
            Syllubuls: <span className="test_info">{Z.hwi.hw}</span>
          </p>
          <p className="test_tag">
            Definition: <span className="test_info">{Z.shortdef[0]}</span>
          </p>
          <audio controls>
            {/* <source
              src={
                "https://media.merriam-webster.com/soundc11/" +
                Z.hwi.prs[0].sound.audio[0] +
                "/" +
                Z.hwi.prs[0].sound.audio +
                ".wav"
              }
              type="audio/wav"
            ></source> */}
          </audio>
          <button className="btn btn-success test_buttonAdd">
            Add to list
          </button>
        </div>
      );
    });
    return <div className="testArray_container">{list}</div>;
  } else {
    return null;
  }
}

export default Test;
