import React, { Component } from "react";
//import "./App.css";

import Title from "./components/Title";
import WordList from "./components/WordList";
// import NameList from "./components/NameList";
// import ListItems from "./ListItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: "",
        word: "",
        type: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  // this.setState({
  //   ["word" + count]: {
  //     word: response.data[0].meta.id,
  //     type: response.data[0].fl,
  //     syllubuls: response.data[0].hwi.hw,
  //     definition: response.data[0].shortdef[0],
  //     sound: "-",
  //     api: API_CALL,
  //   },

  handleInput(e) {
    e.preventDefault();
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newX = this.state.currentItem;
    if (newX.text !== "") {
      //If newX isn't black
      const newXGroup = [...this.state.items, newX]; //...this unpacks all the items in the list and convertes them to individual items, then adds the second parameter to the list
      this.setState({
        items: newXGroup,
        currentItem: {
          text: "",
          key: "",
        },
      });
      console.log(this.state.items);
    }
    // else {
    //   console.log("blank input");
    // }
  }

  render() {
    return (
      <div className="App">
        <Title></Title>
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input
              type="text"
              placeholder="Enter text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            ></input>
            <button type="submit">Add</button>
          </form>
        </header>
        <WordList items={this.state.items}></WordList>
      </div>
    );
  }
}

export default App;

// return (
//   <div className="App">
//     <div>
//       <Title />
//       <WordList />
//     </div>
//   </div>
// );
