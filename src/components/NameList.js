import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana "];

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;

// function NameList() {
//   const names = ["Bruce", "Clark", "Diana"];

//   const nameList = names.map((x) => <h2>{x}</h2>);
//   return <div>{nameList}</div>;
// }

// const people = [
//     {
//       id: 1,
//       name: "Bruce",
//       age: 30,
//       skill: "how to scream like a bat",
//     },
//     {
//       id: 2,
//       name: "Clark",
//       age: 25,
//       skill: "Alergic to green stuff",
//     },
//     {
//       id: 3,
//       name: "Diana",
//       age: 250,
//       skill: "Gets shit done",
//     },
//   ];
