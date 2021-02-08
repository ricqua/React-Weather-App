import React from "react";
import { useDispatch } from "react-redux";
import "./StagedCardComponent.css";

function StagedCardComponent(props) {
  const dispatch = useDispatch();

  const handleAddToList = () => {
    dispatch({
      type: "LIST_ADD",
      payload: {
        word: props.item.meta.id.split(":")[0],
        definition: props.item.shortdef[0],
        type: props.item.fl,
        // sound:
        //   "https://media.merriam-webster.com/soundc11/" +
        //   props.item.meta.id[0] +
        //   "/" +
        //   props.data[0].hwi.prs[0].sound.audio +
        //   ".wav",
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
          <source
            src={
              "https://media.merriam-webster.com/soundc11/" +
              props.item.meta.id[0] +
              "/" +
              props.data[0].hwi.prs[0].sound.audio +
              ".wav"
            }
            type="audio/wav"
          ></source>
        </audio> */}

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
