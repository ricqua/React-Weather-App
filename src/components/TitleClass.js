import React, { Component } from "react";

class TitleClass extends Component {
  constructor(props) {
    super();
    this.state = {
      key3: "three",
    };
  }

  render() {
    const { key1, key2 } = this.props.asd; //Desctructuring the props
    const { key3 } = this.state; //Desctructuring the state
    return (
      <div>
        <h1>TitleClass</h1>
        <p>{key1 + " + " + key2 + " + " + key3}</p>
      </div>
    );
  }
}

export default TitleClass;
