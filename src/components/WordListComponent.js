import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import "./WordListComponent.css";
import WordCardComponent2 from "./WordCardComponent2";

class WordListComponent extends Component {
  handleAccountSave() {
    alert("SUCCESS!!!  Word list saved to your account.");
  }

  render() {
    let mappedItems = "";

    if (this.props.customList) {
      mappedItems = this.props.customList.map((item) => (
        // <p>{this.props.customList[0].word}</p>
        <WordCardComponent2 key={item.id} item={item} />
      ));
    }

    if (this.props.customList !== "") {
      return (
        <div className="Store_container">
          <span className="wordlist_Title">Word list name: </span>
          <input placeholder="Custom word list 1"></input>
          <div className="Array_Component">{mappedItems}</div>
          <button className="btn btn-success" onClick={this.handleAccountSave}>
            Step 2: Save to account
            <i className="far fa-save"></i>
          </button>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    customList: state.fetchFormState.customList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // handleAddToList: () => dispatch(this.handleAddToList()),
    // handleRemove: () => dispatch(this.handleRemove()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordListComponent);
