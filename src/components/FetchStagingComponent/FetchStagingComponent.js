//Staging area of data fetched from dictionary api.  This area shows all json data mapped to individual cards to choose from.

import React, { Component } from "react";
import { connect } from "react-redux";
import "./Array_Component.css";
import spinner from "../images/Spinner.gif";
import WordCardComponent from "../WordCardComponent";

export class FetchStagingComponent extends Component {
  render() {
    let mappedItems = "";

    if (this.props.data) {
      mappedItems = this.props.data.map((item) => (
        <WordCardComponent key={item.meta.id} item={item} />
      ));
    }

    return (
      <div className="Array_Component">
        {this.props.loading ? (
          <img
            src={spinner}
            style={{ width: "100px", display: "block" }}
            alt="Loading..."
          />
        ) : (
          <div className="Array_Component">{mappedItems} </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.fetchFormState.data,
    loading: state.fetchFormState.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // handleInputText: () => dispatch(this.handleInputText()),
    // handleFetch: () => dispatch(this.handleFetch()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchStagingComponent);
