import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import "./FetchFormComponent.css";
import spinner from "../spinner.gif";
import axios from "axios";
// import FetchMappedComponent from './FetchMappedComponent'

export class FetchFormComponent extends Component {
  handleInputText = (data) => {
    store.dispatch((dispatch) => {
      dispatch({ type: "INPUT_TEXT", payload: data });
    });
  };

  handleFetch = (e) => {
    e.preventDefault();
    const API_URL = "https://www.dictionaryapi.com/api/v3/references/sd2/json/";
    const API_KEY = "?key=e225dcea-d406-43ba-922c-3b011d22b54e";
    let searchWord = this.props.fetchFormText;
    // console.log(this.props.fetchFormText);
    var API_CALL = API_URL + searchWord + API_KEY;
    store.dispatch((dispatch) => {
      dispatch({ type: "FETCH_REQUEST" });
    });
    axios
      .get(API_CALL)
      .then((response) => {
        store.dispatch((dispatch) => {
          dispatch({ type: "FETCH_SUCCESS", payload: response });
        });
      })
      .catch((error) => {
        store.dispatch((dispatch) => {
          dispatch({ type: "FETCH_FAIL", payload: error });
        });
      });
  };

  render() {
    let mappedItems = "TEST";
    // if (this.props.data) {
    //   mappedItems = this.props.data.map((item) => (
    //     <FetchMappedComponent key={item.id} item={item} />
    //   ));
    // }

    return (
      <div className="fetchFormComponent">
        <form>
          <input
            className="searchWordInput"
            onChange={(e) => this.handleInputText(e.target.value)}
            placeholder={this.props.fetchFormText}
          />
          <button onClick={this.handleFetch} className="fetchButton">
            Fetch
          </button>
        </form>
        {/* <div>
          {this.props.loading ? (
            <img
              src={spinner}
              style={{ width: "100px", display: "block" }}
              alt="Loading..."
            />
          ) : (
            <div>{mappedItems}</div>
          )}
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchFormText: state.fetchFormState.fetchFormText,
    // data: state.fetchFormState.data,
    loading: state.fetchFormState.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputText: () => dispatch(this.handleInputText()),
    handleFetch: () => dispatch(this.handleFetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchFormComponent);
