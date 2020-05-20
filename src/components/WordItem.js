import React from "react";

function WordItem(props) {
  // console.log("props: ", props);
  const data = props.data.word1;
  console.log("data: ", data);

  // const dataItems = data.word1.map((item) => {
  //   return (
  //     <div>
  //       <p>{item.word}</p>
  //     </div>
  //   );
  // });

  return (
    <div>
      <p>Word Item</p>
      {data.word.length > 0 && (
        <div>
          <p>{data.sound}</p>
          {/* <p>{dataItems}</p> */}
        </div>
      )}
    </div>
  );
}

export default WordItem;
