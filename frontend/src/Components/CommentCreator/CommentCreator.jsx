import React, { Component, useState, useEffect } from "react";

class CommentCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      videoID: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // this.props.CommentCreator(this.state, this.props.videoId)
    this.setState({
      body: "",
      videoID: "",
    });
  };
  render() {
    return (
      <div>
        <h3>Add Comment</h3>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            placeholder="Comment"
            name="body"
            onChange={this.handleChange}
            value={this.state.body}
          />
          <button type="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CommentCreator;
