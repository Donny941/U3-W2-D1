import "./App.css";
import BookList from "./components/BookList";

import Fantasy from "./assets/books/fantasy.json";
import History from "./assets/books/history.json";
import Horror from "./assets/books/horror.json";
import Romance from "./assets/books/romance.json";
import Scifi from "./assets/books/scifi.json";

import MyFooter from "./components/MyFooter";
import NewNav from "./components/NewNav";
import Welcome from "./components/Welcome";
import { Component } from "react";
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";

const bookCategories = {
  Fantasy,
  History,
  Horror,
  Romance,
  Scifi,
};

class App extends Component {
  state = {
    searchValue: "",
    categorySelected: "Fantasy",
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { searchValue, categorySelected } = this.state;
    const currentBookArray = bookCategories[categorySelected];
    const filteredBooks = currentBookArray.filter((book) => book.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (
      <>
        <NewNav />
        <Welcome />
        <div className="container mt-5">
          <div className="puff-in-center d-flex justify-content-between my-5">
            <Form onSubmit={this.handleSubmit} className="ms-3">
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Insert Title.."
                    className=" mr-sm-2"
                    value={this.state.searchValue}
                    onChange={(e) => this.setState({ searchValue: e.target.value })}
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" variant="info">
                    Search Book
                  </Button>
                </Col>
              </Row>
            </Form>
            <ButtonGroup aria-label="Category" className="me-5">
              <Button variant="outline-info" onClick={() => this.setState({ categorySelected: "Fantasy" })} active={this.state.categorySelected === "Fantasy"}>
                Fantasy
              </Button>
              <Button variant="outline-info" onClick={() => this.setState({ categorySelected: "History" })} active={this.state.categorySelected === "History"}>
                History
              </Button>
              <Button variant="outline-info" onClick={() => this.setState({ categorySelected: "Horror" })} active={this.state.categorySelected === "Horror"}>
                Horror
              </Button>
              <Button variant="outline-info" onClick={() => this.setState({ categorySelected: "Romance" })} active={this.state.categorySelected === "Romance"}>
                Romance
              </Button>
              <Button variant="outline-info" onClick={() => this.setState({ categorySelected: "Scifi" })} active={this.state.categorySelected === "Scifi"}>
                Sci-fi
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <BookList books={filteredBooks} />
        <MyFooter />
      </>
    );
  }
}

export default App;
