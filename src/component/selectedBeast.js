import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import HorendBeastC from "./HornedBeastFi";
class SelectedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  openModal() {
    this.setState((prevState) => ({ show: !prevState.show }));
  }
  closeModal(e) {
    this.setState({ show: false });
  }
  render() {
    return (
      <>
        <Button variant="primary" onClick={() => this.openModal()}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.state.closeModal}>
          <Modal.Header closeButton onClick={(e) => this.closeModal(e)}>
            <Modal.Title>{this.props.title} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.imageUrl} width="460" alt={this.props.title} />
          </Modal.Body>
          <p>{this.props.description}</p>
          <Modal.Footer>
            <Button variant="secondary" onClick={(e) => this.closeModal(e)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default SelectedBeast;
