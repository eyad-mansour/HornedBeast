import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import data from "./data.json";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfHoren: this.props.horns,
      show: false,
    };
  }

  handleClick() {
    console.log("Click happened");
  }

  handleSelect(e) {
    e.preventDefault();
    this.setState({
      numberOfHoren: e.props.horns,
    });
    console.log({
      numberOfHoren: e.props.horns,
    });
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="formGridState">
            <Form.Label htmlFor="numberOfHoren">
              select the horned beast you want to show
            </Form.Label>
            <Form.Select
              onChange=""
              id="numberOfHoren"
              defaultValue="Choose..."
            >
              <option value="hb1">1 Horen</option>
              <option value="hb2">2 Horen</option>
              <option value="hb3">3 Horen</option>
              <option value="hb4">4 Horen</option>
              <option value="hb100">100 Horen</option>
            </Form.Select>
            <Button onClick={() => this.handleClick()}> click here</Button>
          </Form.Group>
        </Form>

        <br />
        <br />
        <br />
        <br />
      </>
    );
  }
}
export default Forms;
