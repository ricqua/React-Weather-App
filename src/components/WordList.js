import React, { Component } from "react";
import WordItem from "./WordItem";
import axios from "axios";

const API_URL = "https://www.dictionaryapi.com/api/v3/references/sd2/json/";
const API_KEY = "?key=e225dcea-d406-43ba-922c-3b011d22b54e";
let searchWord = "";

class WordList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   searchWord: "",
      //   word1: [],
      // word1: { data: [{ meta: { id: "" } }] },
      //   word2: [{ name: "WOOOP" }, { name: 2 }],
      word1: { word: "test1", type: "test2", sound: "test3" },
    };
  }

  handleFetch = (e) => {
    e.preventDefault();
    var count = Object.keys(this.state).length + 1;
    var API_CALL = API_URL + searchWord + API_KEY;
    axios
      .get(API_CALL)
      .then((response) => {
        // console.log(response);
        this.setState({
          ["word" + count]: {
            word: response.data[0].meta.id,
            type: response.data[0].fl,
            syllubuls: response.data[0].hwi.hw,
            definition: response.data[0].shortdef[0],
            sound: "-",
            api: API_CALL,
          },
        });
        console.log(this.state);
        // console.log(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handleInputChange = (e) => {
  //   searchWord = e.target.value;
  // };

  // NameList = () => {
  //   const names = ["Bruce", "Clark", "Diana "];

  //   const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
  //   return <div>{nameList}</div>;
  // };

  render() {
    // const { word1 } = this.state;
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
            // onChange={this.handleInputChange}
          ></input>
          <button onClick={this.handleFetch} type="submit">
            Fetch
          </button>
        </form>
        <div>
          <WordItem data={this.state} />
        </div>
      </div>
    );
  }
}

export default WordList;
