import { ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

function SingleComment({ comment }) {
  const rateArray = Array.from({ length: comment.rate });

  return (
    <ListGroupItem className="d-flex justify-content-between gap-4">
      <p>{comment.comment}</p>
      <div className="d-flex">
        {rateArray.map((e, i) => (
          <StarFill key={i} />
        ))}
      </div>
    </ListGroupItem>
  );
}

export default SingleComment;
