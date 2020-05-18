import React from "react";

function Person({ x }) {
  return (
    <div>
      <h2>
        I am {x.name}. I am {x.age} years old. I know {x.skill}
      </h2>
    </div>
  );
}

export default Person;
