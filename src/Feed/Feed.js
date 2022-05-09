import FeedCard from "./FeedCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";
function Feed({ breeds }) {
  return (
    <div>
      <h2>Feed</h2>
      <div>
        <Row>
          {breeds.map((breed, i) => (
            <FeedCard breed={breed} key={i} />
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Feed;
