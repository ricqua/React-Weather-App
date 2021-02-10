import React from "react";
import { useDispatch } from "react-redux";
import "./StagedCardComponent.css";

function StagedCardComponent(props) {
  const dispatch = useDispatch();

  // let audioLink;
  //   "https://media.merriam-webster.com/audio/prons/en/us/mp3/c/cat00001.mp3";
  // if (props.item.hwi.prs !== undefined) {
  //   audioLink = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${props.item.meta.id[0]}/${props.item.hwi.prs[0].sound.audio}.mp3`;
  // }

  const handleAddToList = () => {
    dispatch({
      type: "LIST_ADD",
      payload: {
        word: props.item.meta.id.split(":")[0],
        definition: props.item.shortdef[0],
        type: props.item.fl,
        // sound: audioLink,
      },
    });
  };

  return (
    <React.Fragment>
      <div className="wordCardComponent" id={props.item.id}>
        <p className="wordCard_title">{props.item.meta.id.split(":")[0]}</p>
        <p className="wordCard_tag">
          Type: <span className="wordCard_data">{props.item.fl}</span>
        </p>
        <p className="wordCard_tag">
          Definition:
          <span className="wordCard_data">{props.item.shortdef[0]}</span>
        </p>

        {/* <audio controls>
          <source src={audioLink} type="audio/wav"></source>
        </audio> */}

        {/* <button
          onClick={() => {
            console.log(props);
          }}
        >
          Console log props
        </button> */}

        <button
          onClick={handleAddToList}
          className="btn btn-secondary buttonEdit"
        >
          <i className="far fa-edit"></i>
          <span>Add to word list</span>
        </button>
      </div>
    </React.Fragment>
  );
}

export default StagedCardComponent;
