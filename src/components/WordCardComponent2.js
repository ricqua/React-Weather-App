import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import "./WordCardComponent.css";

export class WordCardComponent extends Component {
  handleRemove = () => {
    console.log("Removed", this.props.item);
    store.dispatch((dispatch) => {
      dispatch({ type: "REMOVE_ITEM", payload: this.props.item });
    });
  };

  render() {
    return (
      <div className="wordCardComponent" id={this.props.item.id}>
        <p className="wordCard_title">{this.props.item.word}</p>
        <p className="wordCard_tag">
          Type: <span className="wordCard_data">{this.props.item.type}</span>
        </p>
        <p className="wordCard_tag">
          Definition:
          <span className="wordCard_data">{this.props.item.definition}</span>
        </p>
        {/* <audio controls>
          <source
            src={
              "https://media.merriam-webster.com/soundc11/" +
              this.props.item.meta.id[0] +
              "/" +
              this.props.data[0].hwi.prs[0].sound.audio +
              ".wav"
            }
            type="audio/wav"
          ></source>
        </audio> */}

        <button
          onClick={this.handleRemove}
          className="btn btn-danger buttonDelete"
        >
          <i className="fas fa-trash-alt"></i>
          {/* <span>Remove</span> */}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.fetchFormState.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRemove: () => dispatch(this.handleRemove()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordCardComponent);
