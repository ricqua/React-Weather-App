import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import "./WordCardComponent.css";

export class WordCardComponent extends Component {
  handleAddToList = () => {
    store.dispatch((dispatch) => {
      dispatch({
        type: "LIST_ADD",
        payload: {
          word: this.props.item.meta.id.split(":")[0],
          definition: this.props.item.shortdef[0],
          type: this.props.item.fl,
          // sound:
          //   "https://media.merriam-webster.com/soundc11/" +
          //   this.props.item.meta.id[0] +
          //   "/" +
          //   this.props.data[0].hwi.prs[0].sound.audio +
          //   ".wav",
        },
      });
    });
  };

  render() {
    return (
      <div className="wordCardComponent" id={this.props.item.id}>
        <p className="wordCard_title">
          {this.props.item.meta.id.split(":")[0]}
        </p>
        <p className="wordCard_tag">
          Type: <span className="wordCard_data">{this.props.item.fl}</span>
        </p>
        <p className="wordCard_tag">
          Definition:
          <span className="wordCard_data">{this.props.item.shortdef[0]}</span>
        </p>
        <audio controls>
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
        </audio>

        <button
          onClick={this.handleAddToList}
          className="btn btn-secondary buttonEdit"
        >
          <i className="far fa-edit"></i>
          <span>Add to word list</span>
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
    handleAddToList: () => dispatch(this.handleAddToList()),
    // handleRemove: () => dispatch(this.handleRemove()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WordCardComponent);
