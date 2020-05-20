import React from "react";
import "./PreviewWord.css";

function PreviewWord(props) {
  const objectB = props.currentItem;
  // console.log(objectB);
  if (objectB.text !== "") {
    return (
      <div className="PreviewWord_container" key={objectB.key}>
        <p className="PreviewWord_Title">{objectB.word}</p>
        <p className="PreviewWord_tag">
          key: <span className="PreviewWord_info">{objectB.key}</span>
        </p>

        <p className="PreviewWord_tag">
          type: <span className="PreviewWord_info">{objectB.type}</span>
        </p>
        <p className="PreviewWord_tag">
          syllubuls:{" "}
          <span className="PreviewWord_info">{objectB.syllubuls}</span>
        </p>
        <p className="PreviewWord_tag">
          definition:{" "}
          <span className="PreviewWord_info">{objectB.definition}</span>
        </p>
        <p className="PreviewWord_tag">
          api: <span className="PreviewWord_info">{objectB.api}</span>
        </p>
        <p className="PreviewWord_tag">
          sound:
          <a href="{objectB.sound}" target="_blank" rel="noopener noreferrer">
            {objectB.sound}
          </a>
        </p>
        <audio controls>
          <source src={objectB.sound} type="audio/wav"></source>
        </audio>
      </div>
    );
  }
}

export default PreviewWord;
