import React, { Component } from "react";
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
  handleClose(e) {
    this.setState({
      show: false,
    });
  }
  render() {
    return (
      <>
        {/* <Button variant="primary" onClick={() => this.openModal()}>
          Launch demo modal
        </Button> */}

        <Modal show={this.state.show} onHide={this.state.handleClose}>
          <Modal.Header>
            <Modal.Title>{this.props.title} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.imageUrl} width="460" alt={this.props.title} />
          </Modal.Body>
          <p>{this.props.description}</p>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default SelectedBeast;
