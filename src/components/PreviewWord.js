import React from "react";

function PreviewWord(props) {
  const objectB = props.currentItem;
  // console.log(objectB);
  if (objectB.text !== "") {
    return (
      <div className="list" key={objectB.key}>
        <p>key: {objectB.key}</p>
        <p>word: {objectB.word}</p>
        <p>type: {objectB.type}</p>
        <p>syllubuls: {objectB.syllubuls}</p>
        <p>definition: {objectB.definition}</p>
        <p>api: {objectB.api}</p>
        <p>
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
  //   return <div></div>;
}

export default PreviewWord;
