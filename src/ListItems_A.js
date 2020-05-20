import React from "react";

function ListItems(props) {
  const objectA = props.items;

  const list = objectA.map((Y) => {
    return (
      <div className="list" key={Y.key}>
        <p>text: {Y.text}</p>
        <p>word: {Y.word}</p>
      </div>
    );
  });

  return <div>{list}</div>;
}

export default ListItems;
