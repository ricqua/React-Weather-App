import React from "react";
// import "./WordItem.css";

function WordItem(props) {
  // const objectA = props.items;

  const list = props.items.map((Y) => {
    return (
      <div className="WordItem_container" key={Y.key}>
        <p className="wordAsset_Title">{Y.word}</p>
        <p className="wordAsset_tag">
          key: <span className="wordAsset_info">{Y.key}</span>
        </p>
        <p className="wordAsset_tag">
          Type: <span className="wordAsset_info">{Y.type}</span>
        </p>
        <p className="wordAsset_tag">
          Syllubuls: <span className="wordAsset_info">{Y.syllubuls}</span>
        </p>
        <p className="wordAsset_tag">
          Definition: <span className="wordAsset_info">{Y.definition}</span>
        </p>
        <p className="wordAsset_tag">
          API: <span className="wordAsset_info">{Y.api}</span>
        </p>

        <p className="wordAsset_tag">
          sound:
          <a
            className="wordAsset_info"
            href="{Y.sound}"
            target="_blank"
            rel="noopener noreferrer"
          >
            {Y.sound}
          </a>
        </p>
        <audio controls>
          <source src={Y.sound} type="audio/wav"></source>
        </audio>
      </div>
    );
  });

  return <div className="Array_container">{list}</div>;
}

export default WordItem;
