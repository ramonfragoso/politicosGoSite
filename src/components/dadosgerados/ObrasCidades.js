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
    this.removeDuplicados = this.removeDuplicados.bind(this);
  }

  removeDuplicados = (array) => {
      let actual = 0;
      let retorno = [];
      let duplicate = false;

      for(let i = 0; i < array.length; i++) {
        actual = array[i];
        for(let j = i+1; j < array.length; j++) {
          if(array[j] == actual) {
            duplicate = true
          }
        }
        if(duplicate) {
          duplicate = false;
        } else {
          retorno.push(array[i])
        }
      }
      return retorno;
  }

  componentDidMount = () => {

    fetch('https://politicosgo.herokuapp.com/obras')
    .then(res => res.json())
    .then(r => {
          let cidadesNome = []
          r.map(resp => {
                  this.setState(prevState => ({
                    infoObras: [...prevState.infoObras, {
                      municipio: resp.municipio,
                      nome: resp.name + " - " + resp.tipoProj,
                      valorFNDE: resp.valorFNDE,
                      situacao: resp.situacao,
                      logradouro: resp.logradouro,
                      bairro: resp.bairro,
                      previsaoConclusao: resp.previsaoConcolusao,
                      empresaContratada: resp.empresaContratada,
                      valorContrato: resp.valorContrato
                    }]
                  }));
                  this.setState(prevState => ({
                    cidades: [...prevState.cidades, resp.municipio]
                  }));
          });
    })
    .then(js => {
      this.setState({cidades: this.removeDuplicados(this.state.cidades).sort()});
    })
    .then(fim => {
      this.setState({terminou: true});
    })
  }

  render() {
    return (
      <Grid className="tudo">
          <header>VEJA AS OBRAS DAS CIDADES DA PARAIBA:</header><p/>
          <div>{this.state.terminou == true ?
            this.state.cidades.map(x => <ModalCidade infos={this.state.infoObras} cidades={this.state.cidades} cidade={x}/>) : <div className="loader"></div>} </div>
      </Grid>
    )
  }
}
