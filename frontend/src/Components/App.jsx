import React, { Component } from "react";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import CommentCreator from "./CommentCreator/CommentCreator";
import Comments from "./Comments/Comments";
import axios from "axios";
import Header from "./Header/Header";
import SideBar from "./Sidebar/Sidebar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }
  createComment = async (comment, videoId) => {
    comment.videoId = videoId;
    let response = await axios.post("http://localhost:5000/comments/", comment);
    let newComments = this.state.comments;
    newComments.push(response.data);
    console.log(response);
    this.setState({
      comments: newComments,
    });
  };
  render() {
    return (
      <div>
        <div className="column">
          <SideBar />
        </div>
        <div className="row">
          <Header />
        </div>
        <div className="row bg-dark">
          <div className="col">
            <VideoPlayer />
          </div>
        </div>

        <div className="row">
          <CommentCreator createComment={this.createComment} />
          <Comments comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

export default App;
