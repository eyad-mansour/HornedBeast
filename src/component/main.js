import React from "react";
import HorendBeastC from "./HornedBeastFi";
import data from "./data.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Main extends React.Component {
  render() {
    return (
      <Row xs={1} md={3} className="g-4">
        {data.map((item) => (
          <Col>
            <HorendBeastC
              title={item.title}
              imageUrl={item.image_url}
              description={item.description}
            />
          </Col>
        ))}
      </Row>
    );
  }
}
export default Main;
