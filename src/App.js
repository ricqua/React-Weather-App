import React, { Component } from "react";
import "./App.css";

import Title from "./components/Title";
import WordList from "./components/WordList";
// import NameList from "./components/NameList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Title />
          <WordList />
        </div>
      </div>
    );
  }
}

export default App;
