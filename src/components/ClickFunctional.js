import React from "react";

function ClickFunctional() {
  function clickHandler() {
    console.log("button Clicked the functional button");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click Functional</button>
    </div>
  );
}

export default ClickFunctional;
