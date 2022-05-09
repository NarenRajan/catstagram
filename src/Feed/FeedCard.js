import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function FeedCard({ breed }) {
  return (
    <Col sm={4}>
      <Card style={{ width: "100%", marginBottom: "20px" }}>
        <Card.Img variant="top" src={breed.image.url} />
        <Card.Body>
          <Card.Title>{breed.name}</Card.Title>
          <Card.Text>{breed.description}</Card.Text>
          <Link to={"/profile/" + breed.id}>Profile</Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default FeedCard;
