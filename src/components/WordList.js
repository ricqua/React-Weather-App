import React, { Component } from "react";
import WordItem from "./WordItem";
import axios from "axios";
import PreviewWord from "./PreviewWord";

const API_URL = "https://www.dictionaryapi.com/api/v3/references/sd2/json/";
const API_KEY = "?key=e225dcea-d406-43ba-922c-3b011d22b54e";
let searchWord = "";

class WordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {},
    };
    this.handleFetch = this.handleFetch.bind(this);
    // this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  handleFetch(e) {
    e.preventDefault();
    var API_CALL = API_URL + searchWord + API_KEY;
    axios
      .get(API_CALL)
      .then((response) => {
        this.setState({
          currentItem: {
            word: response.data[0].meta.id,
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
        <form onSubmit={this.handleFetch}>
          <label>List of words </label>
          <input
            type="text"
            value={this.state.word}
            placeholder="e.g. cat"
            onChange={(e) => {
              searchWord = e.target.value;
            }}
          ></input>
          <button onClick={this.handleFetch} type="submit">
            Fetch
          </button>
        </form>
        <div>
          <PreviewWord currentItem={this.state.currentItem}></PreviewWord>
          <button onClick={this.addItem}>Add to list</button>
        </div>

        <div>
          <WordItem items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default WordList;
