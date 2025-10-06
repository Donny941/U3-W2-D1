import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Alert, Spinner } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  commentLoad = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMDUxYzZmMzAyMjAwMTUxMDgwYjgiLCJpYXQiOjE3NTk0MDQwOTksImV4cCI6MTc2MDYxMzY5OX0._D52qx_VsS0r3vSqji5KdBzrYpZMLfSlAT1Y1vg34h0",
        },
      });
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
        console.log(data);
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.id !== this.props.id) {
      // console.log(` ${this.props.id}`);
      this.commentLoad();
    }
  };

  // componentDidMount = () => {
  //   this.commentLoad();
  // };

  render() {
    return (
      <div className="nav-bg p-4 rounded border border-info border-3 me-5">
        <CommentList comments={this.state.comments} />
        {!this.props.id && (
          <Alert variant="info">
            <p>Click one book to load comments!</p>
          </Alert>
        )}

        <AddComment id={this.props.id} commentRefresh={this.commentLoad} />
      </div>
    );
  }
}
export default CommentArea;
