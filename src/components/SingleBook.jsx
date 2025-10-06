import { Component } from "react";
import { Badge, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  // state = {
  //   selected: false,
  // };
  render() {
    return (
      <Card
        // onClick={() => {
        //   this.setState({ selected: true });
        // }}

        className={`tilt-in-top  scale ms-5 shadow-lg bg-body-tertiary p-0 ${this.props.selected ? "border-info border-3" : ""}`}
      >
        <Card.Img
          onClick={() => {
            this.props.handleSelect(this.props.book.asin);
          }}
          style={{ height: "250px", objectFit: "cover" }}
          variant="top"
          src={this.props.book.img}
        />
        <Card.Body className="d-flex flex-column justify-content-between align-items-start">
          <Card.Title>{this.props.book.title}</Card.Title>
          <div className="d-flex justify-content-between align-items-center w-100">
            <Badge pill bg="light" text="dark">
              {this.props.book.price} $
            </Badge>
            <Button variant="primary">Buy Now</Button>
          </div>
          {/* {this.state.selected && <CommentArea id={this.props.book.asin} />} */}
        </Card.Body>
      </Card>
    );
  }
}

// <Row className="g-0">
//   <Col md={4}>
//     <Card.Img
//       src={this.props.book.img}
//       className="img-fluid rounded-start"
//       style={{ height: "100%", objectFit: "cover" }}
//     />
//   </Col>
//   <Col md={8}>
//     <Card.Body className="d-flex flex-column justify-content-between align-items-start">
//       <Card.Title>{this.props.book.title}</Card.Title>
//       <div className="d-flex justify-content-between align-items-center w-100">
//         <Badge pill bg="light" text="dark">
//           {this.props.book.price} $
//         </Badge>
//         <Button variant="primary">Buy Now</Button>
//       </div>
//     </Card.Body>
//   </Col>
// </Row>
export default SingleBook;
