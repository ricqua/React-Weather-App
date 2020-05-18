import React from "react";

const TitleFunctional = (props) => {
  const { key1, key2 } = props.asd; //Desctructuring the props
  //console.log("Title.js: " + key1 + key2);

  return (
    <div>
      <h1>TitleFunctional</h1>
      <p>{key1 + " + " + key2}</p>
    </div>
  );
};

export default TitleFunctional;
