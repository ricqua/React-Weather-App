import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "name",
      comments: "comments",
      topic: "opt1",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { username, comments, topic } = this.state;
    return (
      <div>
        <h1> Form component</h1>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            UserName
            <input
              type="text"
              value={username}
              placeholder={username}
              onChange={this.handleUsernameChange}
            ></input>
          </label>
          <div>
            <label>Comments</label>
            <textarea
              type="text"
              value={comments}
              placeholder={comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
              <option value="opt1">opt1</option>
              <option value="opt2">opt2</option>
              <option value="opt3">opt3</option>
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
