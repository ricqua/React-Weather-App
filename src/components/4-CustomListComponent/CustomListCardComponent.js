import React from "react";
import { useDispatch } from "react-redux";
// import "./WordCardComponent.css";

function CustomListCardComponent(props) {
  const dispatch = useDispatch();

  return (
    <div className="wordCardComponent" id={props.item.id}>
      <p className="wordCard_title">{props.item.word}</p>
      <p className="wordCard_tag">
        Type: <span className="wordCard_data">{props.item.type}</span>
      </p>
      <p className="wordCard_tag">
        Definition:
        <span className="wordCard_data">{props.item.definition}</span>
      </p>
      <audio controls>
        <source src={props.item.audioLink} type="audio/wav"></source>
      </audio>

      <button
        onClick={() => {
          dispatch({ type: "REMOVE_ITEM", payload: props.item });
        }}
        className="btn btn-danger buttonDelete"
      >
        <i className="fas fa-trash-alt"></i>
        {/* <span>Remove</span> */}
      </button>
    </div>
  );
}

export default CustomListCardComponent;
