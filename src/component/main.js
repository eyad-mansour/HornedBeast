import React from "react";
import HornedBeastFi from "./HornedBeastFi";
import data from "./data.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SelectedBeast from "./SelectedBeast.js";
import { Form } from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterBeast: "0",
      beasts: "",
    };
  }

  handleFilterBeasts = (e) => {
    e.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      filterBeast: event.target.value,
    });
  };

  render() {
    let finalData = [];
    if (this.state.filterBeast === "0") {
      finalData = data;
    } else {
      finalData = data.filter((card) => card.horns == this.state.filterBeast);
    }

    return (
      <>
        <Form>
          <Form.Group controlId="formGridState">
            <Form.Label>select the horned beast you want to show</Form.Label>
            <Form.Select
              value={this.state.filterBeast}
              onChange={this.handleChange}
              id="numberOfHoren"
              defaultValue="All"
            >
              <option value="1">1 Horen</option>
              <option value="2">2 Horen</option>
              <option value="3">3 Horen</option>
              <option value="100">100 Horen</option>
            </Form.Select>
          </Form.Group>
        </Form>
        <Row xs={1} md={4} className="g-4">
          {finalData.map((card) => (
            <Col key={card.id}>
              <HornedBeastFi
                imageUrl={card.image_url}
                title={card.title}
                description={card.description}
                keyword={card.keyword}
                horns={card.horns}
                data={card}
              />
              <SelectedBeast
                imageUrl={card.image_url}
                title={card.title}
                description={card.description}
                keyword={card.keyword}
                horns={card.horns}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Main;
