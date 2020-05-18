import React, { Component } from "react";

class ClickClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     console.log("Clicked the class button");
  //     this.setState({
  //       message: "goodbye",
  //     });
  //   }

  clickHandler = () => {
    this.setState({
      message: "goodbye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click class</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click class</button> */}
        <button onClick={this.clickHandler}>Click class</button>
      </div>
    );
  }
}

export default ClickClass;
