import React from 'react';
import './dadosGerados.css';


export default class CardObra extends React.Component {

  render() {
    return (
      <div className="boxed">
        <h2 className="infoObras">Nome: <h3 className="prop">{this.props.nome}</h3></h2>
        <h2 className="infoObras">Rua: <h3 className="prop">{this.props.logradouro}</h3></h2>
        <h2 className="infoObras">Bairro: <h3 className="prop">{this.props.bairro}</h3></h2>
        <h2 className="infoObras">Previsão de conclusão: <h3 className="prop">{this.props.previsaoConclusao}</h3></h2>
        <h2 className="infoObras">Situação: <h3 className="prop">{this.props.situacao}</h3></h2>
        <h2 className="infoObras">Valor destinado do FNDE: <h3 className="prop">R$ {this.props.valorFNDE}</h3></h2>
        <h2 className="infoObras">Valor do contrato: <h3 className="prop">R$ {this.props.valorContrato}</h3></h2>
        <h2 className="infoObras">Empresa contratada para realização da obra:<h3 className="prop"> {this.props.empresaContratada}</h3></h2>
      </div>
    )
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
}
