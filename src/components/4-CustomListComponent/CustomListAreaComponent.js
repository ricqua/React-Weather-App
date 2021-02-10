import React from "react";
import { useSelector } from "react-redux";
import "./CustomListAreaComponent.css";
import CustomListCardComponent from "./CustomListCardComponent";

function CustomListAreaComponent() {
  const globalState = useSelector((state) => state.globalState);

  let mappedItems = "";

  if (globalState.customList) {
    mappedItems = globalState.customList.map((item) => (
      // <p>{this.props.customList[0].word}</p>
      <CustomListCardComponent key={item.word} item={item} />
    ));
  }
  if (globalState.customList.length <= 0) {
    return null;
  } else {
    return (
      <React.Fragment>
        <div className="WorldList_container">
          {/* <span className="wordlist_Title">Word list name: </span> */}
          <input placeholder="e.g. Sams's list of words"></input>
          <button
            className="btn btn-success"
            onClick={() => {
              alert("SUCCESS!!!  Thank you for viewing my demo web app.");
            }}
          >
            Save to account
            <i className="far fa-save"></i>
          </button>
          <div className="CustomListArray_Component">{mappedItems}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomListAreaComponent;
