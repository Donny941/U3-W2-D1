import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

function CommentList({ comments }) {
  return (
    <ListGroup className="mt-3">
      <h4>Comments:</h4>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </ListGroup>
  );
}

export default CommentList;
