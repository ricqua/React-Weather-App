import React, { Component } from "react";
import WordList from "./components/WordList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <WordList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
