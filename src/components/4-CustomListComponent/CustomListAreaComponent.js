import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./CustomListAreaComponent.css";
import CustomListCardComponent from "./CustomListCardComponent";

function CustomListAreaComponent() {
  const globalState = useSelector((state) => state.globalState);
  const dispatch = useDispatch();

  let mappedItems = "";

  if (globalState.customList) {
    mappedItems = globalState.customList.map((item) => (
      // <p>{this.props.customList[0].word}</p>
      <CustomListCardComponent key={item.id} item={item} />
    ));
  }
  if (globalState.customList == "") {
    return null;
  } else {
    return (
      <React.Fragment>
        <div className="WorldList_container">
          {/* <span className="wordlist_Title">Word list name: </span> */}
          <input placeholder="Custom word list 1"></input>
          <button
            className="btn btn-success"
            onClick={() => {
              alert("SUCCESS!!!  Word list saved to your account.");
            }}
          >
            Save to account
            <i className="far fa-save"></i>
          </button>
          <div className="Array_Component">{mappedItems}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomListAreaComponent;
