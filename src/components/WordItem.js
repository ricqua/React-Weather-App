import React from "react";

function WordItem(props) {
  // const objectA = props.items;

  const list = props.items.map((Y) => {
    return (
      <div className="list" key={Y.key}>
        <p>word: {Y.word}</p>
        <p>key: {Y.key}</p>
      </div>
    );
  });

  return <div>{list}</div>;
}

export default WordItem;

// function WordItem(props) {
//   const objectA = props.items;

//   const list = objectA.map((Y) => {
//     return (
//       <div className="list" key={Y.key}>
//         <p>word: {Y.word}</p>
//         <p>key: {Y.key}</p>
//       </div>
//     );
//   });

//   return <div>{list}</div>;
// }
