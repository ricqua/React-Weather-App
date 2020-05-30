import React, { Component } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import FetchFormComponent from "./components/FetchFormComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <HeaderComponent />
            <FetchFormComponent />
            {/* <WordListComponent/> */}
            <FooterComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
