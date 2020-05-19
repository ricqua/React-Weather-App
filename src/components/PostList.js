import React, { Component } from "react";
import axios from "axios";
let searchWord = "";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   searchWord: "",
      //   word1: [],
      word1: { data: [{ meta: { id: "" } }] },
      //   word2: [{ name: "WOOOP" }, { name: 2 }],
    };
  }

  handleFetch = (e) => {
    e.preventDefault();
    var count = Object.keys(this.state).length + 1;
    axios
      .get(
        "https://www.dictionaryapi.com/api/v3/references/sd2/json/" +
          searchWord +
          "?key=" +
          "e225dcea-d406-43ba-922c-3b011d22b54e"
      )
      .then((response) => {
        // console.log(response);
        // this.setState({ word1: response });
        this.setState({
          ["word" + count]: response,
        });
        // console.log(this.state.word1.data[0].shortdef[0]);
        console.log(this.state);
        // console.log(count);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleInputChange = (event) => {
    searchWord = event.target.value;
  };

  render() {
    const { word1 } = this.state;
    return (
      <div>
        <form onSubmit={this.handleFetch}>
          <label>List of words </label>
          <input
            type="text"
            value={this.state.word}
            placeholder="e.g. cat"
            onChange={this.handleInputChange}
          ></input>
          <button onClick={this.handleFetch} type="submit">
            Fetch
          </button>
        </form>
        <div>
          {word1.data[0].meta.id && (
            <div>
              <p>Word: {word1.data[0].meta.id}</p>
              <p>Type: {word1.data[0].fl}</p>
              <p>Syllabuls: {word1.data[0].hwi.hw}</p>
              <p>Definition: {word1.data[0].shortdef[0]}</p>
              {/* <p>
                Sound: https://media.merriam-webster.com/soundc11/
                {word1.data[0].hwi.prs[0].sound.audio[0]}/
                {word1.data[0].hwi.prs[0].sound.audio}.wav
              </p> */}
              {/* <audio controls>
                <source
                  src={
                    "https://media.merriam-webster.com/soundc11/" +
                    word1.data[0].hwi.prs[0].sound.audio[0] +
                    "/" +
                    word1.data[0].hwi.prs[0].sound.audio +
                    ".wav"
                  }
                  type="audio.wav"
                />
              </audio> */}
            </div>
          )}

          {/* {word1.data[0].meta.id.length > 0 ? (
            <div>
              <p>Word: {word1.data[0].meta.id}</p>
              <p>Definition: {word1.data[0].shortdef[0]}</p>
            </div>
          ) : null} */}
        </div>
      </div>
    );
  }
}

export default PostList;
