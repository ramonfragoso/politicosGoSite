import React from 'react';
import {Modal, OverlayTrigger, Button} from 'react-bootstrap';
import CardObra from './CardObra';
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

  // municipio: resp.municipio,
  // nome: resp.name,
  // valorFNDE: resp.valorFNDE,
  // situacao: resp.situacao,
  // logradouro: resp.logradouro,
  // bairro: resp.bairro,
  // previsaoConcolusao: resp.previsaoConcolusao,
  // empresaContratada: resp.empresaContratada,
  // valorContrato: resp.valorContrato

  render() {
    return (
      <div className="municipioListar">

      <a onClick={this.handleShow}>{this.props.cidade}</a>

      <Modal bsSize="large" aria-labelledby="contained-modal-title-lg" show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h1 className="municipioListar">{this.props.cidade}</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>{
            this.props.infos.map(x => {
              if (x.municipio == this.props.cidade) {
                return(
                  <CardObra
                    municipio={x.municipio}
                    nome={x.nome}
                    valorFNDE={x.valorFNDE}
                    situacao={x.situacao}
                    logradouro={x.logradouro}
                    bairro={x.bairro}
                    previsaoConclusao={x.previsaoConclusao}
                    empresaContratada={x.empresaContratada}
                    valorContrato={x.valorContrato}/>)
              }
            })
          }</div>
        </Modal.Body>
      </Modal>


      </div>
    )
  }
}
