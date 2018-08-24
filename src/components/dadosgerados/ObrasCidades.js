import React from 'react';
import {PanelGroup, Panel, Alert, Grid} from 'react-bootstrap';
import './dadosGerados.css';
import BarChart from "react-svg-bar-chart"
import LoadingScreen from 'react-loading-screen';
import ModalCidade from './ModalCidade';

export default class ObrasCidades extends React.Component {


  // coisas a serem mostradas por obras:
  // "name": "Quadra da Escola Cec�lia E. Meireles",
  // "situacao": "Conclu�da",
  // "municipio": "Cajazeiras",
  // "uf": "PB",
  // "logradouro": "Rua Raimundo Leite Rolim",
  // "bairro": "Casas Populares",
  // "previsaoConcolusao": "31/12/2014",
  // "empresaContratada": "(14958510000180) TEC NOVA - CONSTRUCAO CIVIL LTDA - ME",
  // "valorContrato": 498851.77,

  // [{
      // "municipio": "Cajazeiras",
      // "name": "Quadra da Escola Cec�lia E. Meireles",
      // "situacao": "Conclu�da",
      // "uf": "PB",
      // "logradouro": "Rua Raimundo Leite Rolim",
      // "bairro": "Casas Populares",
      // "previsaoConcolusao": "31/12/2014",
      // "empresaContratada": "(14958510000180) TEC NOVA - CONSTRUCAO CIVIL LTDA - ME",
      // "valorContrato": 498851.77,
  //}]

  constructor(props) {
    super(props);
    this.state = {
      infoObras: [],
      cidades: [],
      terminou: false,

    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount = () => {

    fetch('https://politicosgo.herokuapp.com/obras')
    .then(res => res.json())
    .then(r => {
          r.map(resp => {
                  this.setState(prevState => ({
                    infoObras: [...prevState.infoObras, {
                      municipio: resp.municipio,
                      nome: resp.name,
                      valorFNDE: resp.valorFNDE,
                      situacao: resp.situacao,
                      logradouro: resp.logradouro,
                      bairro: resp.bairro,
                      previsaoConcolusao: resp.previsaoConcolusao,
                      empresaContratada: resp.empresaContratada,
                      valorContrato: resp.valorContrato
                    }]
                  }))
                  this.setState(prevState => ({
                    cidades: [...prevState.cidades, resp.municipio]
                  }))
          })
    })
    .then(js => {
      this.setState({terminou: true})
    })
  }




  handleClick() {
    console.log(this.state.infoObras[0].municipio)
  }

  render() {
    return (
      <Grid className="tudo" onClick={this.handleClick}>
          <div>{this.state.terminou == true ?
            this.state.infoObras.map(x => <ModalCidade cidade={x.municipio}></ModalCidade>): "loading..."}</div>
      </Grid>
    )
  }
}
