import React from "react";
import Card from "react-bootstrap/Card";
import Main from "./main";
class CardReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.image_url} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
          <span onClick={this.handleClick}>👍</span>
        </Card.Body>
      </Card>
    );
  }
}
export default CardReact;
