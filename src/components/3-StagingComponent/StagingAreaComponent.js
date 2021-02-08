//Staging area of data fetched from dictionary api.  This area shows all json data mapped to individual cards to choose from.

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./StagingAreaComponent.css";
import spinner from "../0-images/Spinner.gif";
import StagedCardComponent from "./StagedCardComponent";

function StagingAreaComponent() {
  const globalState = useSelector((state) => state.globalState);
  const dispatch = useDispatch();

  let mappedItems = "";

  if (globalState.data) {
    mappedItems = globalState.data.map((item) => (
      <StagedCardComponent key={item.meta.id} item={item} />
    ));
  }

  return (
    <React.Fragment>
      <div className="FetchStagingComponent">
        {globalState.loading ? (
          <img
            src={spinner}
            style={{ width: "100px", display: "block" }}
            alt="Loading..."
          />
        ) : (
          <div className="FetchStagingComponent">{mappedItems} </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default StagingAreaComponent;
