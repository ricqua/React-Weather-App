import React, { Component } from "react";

// import TitleFunctional from "./components/TitleFunctional";
// import TitleClass from "./components/TitleClass";
// import ClickFunctional from "./components/ClickFunctional";
// import ClickClass from "./components/ClickClass";
// import UserGreeting from "./components/UserGreeting";
// import NameList from "./components/NameList";
// import Form from "./components/Form";
import PostList from "./components/PostList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key1: "ones",
      key2: "two",
      // set1: [{ key1: "ones" }, { key2: "two" }],
    };
  }

  render() {
    // console.log("App.js: ", this.state);
    return (
      <div className="App">
        <div>
          <PostList></PostList>
        </div>
        {/* <TitleFunctional asd={this.state} />
        <ClickFunctional />
        <br />
        <TitleClass asd={this.state} />
        <ClickClass />
        <br />
        <UserGreeting />
        <NameList />
        <br />
        <Form /> */}
      </div>
    );
  }
}

export default App;
