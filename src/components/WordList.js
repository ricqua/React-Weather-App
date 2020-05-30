import React, { Component } from "react";
import axios from "axios";
import WordItem from "./WordItem";
import PreviewWord from "./PreviewWord";
import Store from "./Store";
import Title from "./Title";
import Test from "./Test";
import "./WordItem.css";
import "./WordList.css";

const API_URL = "https://www.dictionaryapi.com/api/v3/references/sd2/json/";
const API_KEY = "?key=e225dcea-d406-43ba-922c-3b011d22b54e";
let searchWord = "";

class WordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {},
      currentItems: [],
      test: [{ test1: "A" }, { test1: "B" }, { test1: "C" }, { test1: "E" }],
    };
    this.handleFetch = this.handleFetch.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleFetch(e) {
    e.preventDefault();
    var API_CALL = API_URL + searchWord + API_KEY;
    axios
      .get(API_CALL)
      .then((response) => {
        var word = response.data[0].meta.id.split(":")[0];
        this.setState({
          currentItem: {
            word: word,
            type: response.data[0].fl,
            syllubuls: response.data[0].hwi.hw,
            definition: response.data[0].shortdef[0],
            sound:
              "https://media.merriam-webster.com/soundc11/" +
              response.data[0].hwi.prs[0].sound.audio[0] +
              "/" +
              response.data[0].hwi.prs[0].sound.audio +
              ".wav",
            api: API_CALL,
            key: Date.now(),
          },
          currentItems: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addItem(e) {
    e.preventDefault();
    const newX = this.state.currentItem;
    if (newX.word !== "") {
      const newXGroup = [...this.state.items, newX];
      this.setState({
        items: newXGroup,
        currentItem: {
          word: "",
          type: "",
          syllubuls: "",
          definition: "",
          sound: "",
          api: "",
          key: "",
        },
      });
    }
  }

  render() {
    return (
      <div className="WordList_container">
        <div className="Preparation_Container">
          {/* <p className="WordList_Title">Preview Word</p> */}
          <Title />

          <form onSubmit={this.handleFetch} className="form_container">
            {/* <label>List of words </label> */}
            <input
              type="text"
              value={this.state.word}
              placeholder="e.g. cat"
              onChange={(e) => {
                searchWord = e.target.value;
              }}
            ></input>
            <button
              onClick={this.handleFetch}
              type="submit"
              className="btn btn-primary fetchButton"
            >
              Step 1: Search
              <i className="fas fa-search"></i>
            </button>
          </form>
          <Test currentItems={this.state.currentItems} />
          <div>
            <PreviewWord currentItem={this.state.currentItem}></PreviewWord>
            <button
              onClick={this.addItem}
              className="btn btn-success buttonAddToList"
            >
              Step 2: Add to word list
              <i className="fas fa-plus-circle"></i>
            </button>
          </div>
        </div>
        <div className="row Array_container">
          <WordItem items={this.state.items} />
        </div>
        <Store items={this.state.items} />
      </div>
    );
  }
}

export default WordList;
