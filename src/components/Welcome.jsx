import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Welcome() {
  return (
    <div className="bg-custom">
      <div className="container d-flex align-content-center py-4">
        <div>
          <h1 className="py-3 focus-in-contract">Discover Our Amazing Books!</h1>
        </div>
        <Alert className="slide-in-right" variant="info m-0">
          <Alert.Heading>Hey, nice to see you again!</Alert.Heading>
          <p>
            Welcome to our amazing book store, a place where fantasy, creativity, and literature converge to help you become a better person. Remember, studying
            every day helps us grow and improve.
          </p>
          <hr />
          <p className="mb-0">What are you waiting for? Buy some Culture!</p>
        </Alert>
      </div>
    </div>
  );
}
export default Welcome;
