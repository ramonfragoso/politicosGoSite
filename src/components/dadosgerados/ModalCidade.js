import React from 'react';
import {Modal} from 'react-bootstrap';
import './dadosGerados.css';

export default class ModalCidade extends React.Component {

  render() {
    return(
      <div className="cidade">
        <Modal>
          {this.props.name}
        </Modal>
      </div>
    )
  }
}
