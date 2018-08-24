import React from 'react';
import {Modal, OverlayTrigger, Button} from 'react-bootstrap';
import './dadosGerados.css';

export default class ModalCidade extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="municipioListar">
      <a onClick={this.handleShow}>{this.props.cidade}</a>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.cidade}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{this.props.cidades}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
}
