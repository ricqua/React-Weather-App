//Word search area at the top of the page which is used to fetch data from the dictionary API

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./FetchFormComponent.css";

function FetchFormComponent() {
  const globalState = useSelector((state) => state.globalState);
  const dispatch = useDispatch();

  const handleFetch = (e) => {
    e.preventDefault();
    const API_URL = "https://www.dictionaryapi.com/api/v3/references/sd2/json/";
    const API_KEY = "?key=e225dcea-d406-43ba-922c-3b011d22b54e";
    let searchWord = globalState.inputText;
    var API_CALL = API_URL + searchWord + API_KEY;
    dispatch({ type: "FETCH_REQUEST" });
    axios
      .get(API_CALL)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_FAIL", payload: error });
      });
  };

  return (
    <React.Fragment>
      <div className="fetchFormComponent">
        <form>
          {/* <p>Start by searching the dictionary API for a word.</p> */}
          <input
            className="searchWordInput"
            onChange={(e) =>
              dispatch({ type: "INPUT_TEXT", payload: e.target.value })
            }
            placeholder="e.g. Cat"
          />
          <button onClick={handleFetch} className="btn btn-primary fetchButton">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default FetchFormComponent;
