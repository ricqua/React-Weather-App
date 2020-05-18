import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      //   wordlist2: [],
    };
  }

  handleButtonClick = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response);
        this.setState({ posts: response.data });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   componentDidMount() {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((response) => {
  //         // console.log(response);
  //         this.setState({ posts: response.data });
  //         console.log(this.state);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }

  render() {
    const { posts } = this.state;
    return (
      <div>
        List of posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        <button onClick={this.handleButtonClick}>Fetch</button>
      </div>
    );
  }
}

export default PostList;
