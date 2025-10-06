import { Component } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

class AddComment extends Component {
  state = {
    comment: "",
    rate: "1",
    elementId: "",
  };

  postComment = async () => {
    try {
      const newComment = {
        comment: this.state.comment,
        rate: this.state.rate,
        elementId: this.props.id,
      };
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGNkMDUxYzZmMzAyMjAwMTUxMDgwYjgiLCJpYXQiOjE3NTk0MDQwOTksImV4cCI6MTc2MDYxMzY5OX0._D52qx_VsS0r3vSqji5KdBzrYpZMLfSlAT1Y1vg34h0",
        },
      });
      if (response.ok) {
        // const data = await response.json();
        this.setState({ comment: "", rate: "" });
        this.props.commentRefresh();
        // console.log(data);
      } else {
        console.log("error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.postComment();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="mt-3">
        <Row>
          <div className="border border-info p-2 rounded">
            <h4>Add Comment:</h4>
            <Col xs="auto" className="d-flex flex-column gap-2 mt-2">
              <Form.Control
                type="text"
                placeholder="Your Comment.."
                className=" mr-sm-2"
                value={this.state.comment}
                onChange={(e) => this.setState({ comment: e.target.value })}
                required
              />
              <Form.Select size="sm" value={this.state.rate} onChange={(e) => this.setState({ rate: e.target.value })}>
                <option>Stars</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
            </Col>
            <Col xs="auto">
              <Button className="mt-2 " type="submit" variant="info">
                Post
              </Button>
            </Col>
          </div>
        </Row>
      </Form>
    );
  }
}
export default AddComment;
