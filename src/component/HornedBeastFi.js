import React from "react";
import Card from "react-bootstrap/Card";
import SelectedBeast from "./selectedBeast";
class HorendBeastC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0,
      clickModal: true,
    };
  }

  openModal() {
    this.porps((prevState) => ({ show: !prevState.show }));
  }
  closeModal(e) {
    this.props({ show: false });
  }

  favoriteClick = () => {
    this.setState({ favorite: this.state.favorite + 1 });
  };
  render() {
    return (
      <Card onclick={this.openModal} style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={this.props.imageUrl}
          alt={this.props.title}
          onClick={this.favoriteClick}
        />
        <Card.Body>
          <Card.Title>
            {this.props.title}👍 {this.state.favorite}
          </Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    );
  }
}
export default HorendBeastC;
