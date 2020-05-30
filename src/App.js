import React, { Component } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import FetchFormComponent from "./components/FetchFormComponent";
import FetchStagingComponent from "./components/FetchStagingComponent";
import WordListComponent from "./components/WordListComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <HeaderComponent />
            <div>
              <FetchFormComponent />
              <FetchStagingComponent />
              <WordListComponent />
            </div>
            <FooterComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
