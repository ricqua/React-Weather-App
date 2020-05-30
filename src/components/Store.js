import React, { Component } from "react";
import "./Store.css";

class Store extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       items: [],
  //       currentItem: {},
  //     };
  //     // this.handleInput = this.handleInput.bind(this);
  //   }
  handleAccountSave(props) {
    alert("SUCCESS!!!  Word list saved to your account.");
  }

  render() {
    return (
      <div className="Store_container">
        <button className="btn btn-success" onClick={this.handleAccountSave}>
          Step 3: Save to account
          <i className="far fa-save"></i>
        </button>
      </div>
    );
  }
}

export default Store;
