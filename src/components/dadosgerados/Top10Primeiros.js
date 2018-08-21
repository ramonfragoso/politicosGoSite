import React from 'react';
import {Grid, PageHeader, Row} from 'react-bootstrap';
import './dadosGerados.css';

export default class Top10Primeiros extends React.Component {

    // "name": "Quadra da Escola Cec�lia E. Meireles",
    // "situacao": "Conclu�da",
    // "municipio": "Cajazeiras",
    // "uf": "PB",
    // "cep": "58900000",
    // "logradouro": "Rua Raimundo Leite Rolim",
    // "bairro": "Casas Populares",
    // "situacaoConvenio": "Vencido",
    // "percentualExecucao": 100,
    // "previsaoConcolusao": "31/12/2014",
    // "tipoEnsino": "Educa��o B�sica",
    // "tipoProj": "QUADRA ESCOLAR COBERTA COM VESTI�RIO- PROJETO FNDE",
    // "valorFNDE": 506388.37"
    // "nomeEntidade": "PREF MUN DE CAJAZEIRAS",
    // "razaoSocial": "CAJAZEIRAS PREFEITURA                                                                                                                                                                                   ",
    // "email": "gabinete@cajazeiras.pb.gov.br",

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      nomeObra: '',
      situacao: '',
      uf: '',
      logradouro: '',
      bairro: '',
      nomeEntidade: ''
    }
  }

  handleClick = (e) => {
    this.setState({show:true})

    fetch('https://politicosgo.herokuapp.com/obras')
    .then(r => r.json())
    .then(res => {
        for(var i in res) {
          console.log(i)
        }
    });



  }

  handleClose = (e) => {
    this.setState({show:false})
  }

  render() {
    return(
      <Grid className="obrasCidades">
        <Row>
            <PageHeader className="header">
              <div ref="dados">
                TOP 10 CIDADES COM MAIS OBRAS NA PARAIBA
              </div>
            </PageHeader>
        </Row>
      </Grid>
    )
  }
}
