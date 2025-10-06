import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    bookAsin: null,
  };

  handleSelected = (bookAsin) => {
    this.setState({
      bookAsin: this.state.bookAsin === bookAsin ? null : bookAsin,
    });
  };
  render() {
    const { books } = this.props;
    return (
      <div className="container mt-5">
        <div className="d-flex">
          <Row>
            <Col md={8}>
              <Row xs={1} md={3} lg={3} className="gap-5">
                {books.map((book) => (
                  <SingleBook key={book.asin} book={book} handleSelect={this.handleSelected} selected={this.state.bookAsin === book.asin} />
                ))}
              </Row>
            </Col>
            <Col md={4}>
              <CommentArea id={this.state.bookAsin} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default BookList;
