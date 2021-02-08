import React, { Component } from "react";
import "./App.css";
import HeaderComponent from "./components/1-HeaderComponent/HeaderComponent";
import FooterComponent from "./components/5-FooterComponent/FooterComponent";
import FetchFormComponent from "./components/2-FetchFormComponent/FetchFormComponent";
import StagingAreaComponent from "./components/3-StagingComponent/StagingAreaComponent";
import CustomListAreaComponent from "./components/4-CustomListComponent/CustomListAreaComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <HeaderComponent />
            <div>
              <FetchFormComponent />
              <StagingAreaComponent />
              <CustomListAreaComponent />
            </div>
            <FooterComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
