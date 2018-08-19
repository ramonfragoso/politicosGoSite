import React from 'react';
import {PanelGroup, Panel, Col, Grid} from 'react-bootstrap';
import './dadosGerados.css';
import BarChart from "react-svg-bar-chart"
import LoadingScreen from 'react-loading-screen';

export default class Dados extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      nomePrefeitos: [],
      cidades: [],
      ranking: [],
      obrasPorCidade: {},
      activeKey: '0',
      loading: true
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount = () => {

    window.scrollTo(0, 0)
    // //armazena todos os prefeitos
    // fetch("https://politicosgo.herokuapp.com/prefeitos")
    // .then(r => r.json())
    // .then(js => {
    //   js.map(x => {
    //     this.setState(prevState => ({
    //       nomePrefeitos: [...prevState.nomePrefeitos, x["nome"]]
    //     }))
    //   })
    // })

    //armazena todas as cidades
    fetch("https://politicosgo.herokuapp.com/obras")
    .then(r => r.json())
    .then(js => {
      js.map(x => {
        this.state.obrasPorCidade[x.municipio] = [];
      })
    })
    .then(res => {
      for(var i in this.state.obrasPorCidade) {
        this.setState(prevState => ({
          cidades: [...prevState.cidades, i]
        }))
      }
    })
    .then(resp => {
      this.state.cidades.sort(function(a, b){
          if(a < b) return -1;
          if(a > b) return 1;
          return 0;
      })
    })

// [[cajazeira, 4], [soledade, 10], [campena, ]]
    // mapeia obras para cidade
    fetch("https://politicosgo.herokuapp.com/obras")
    .then(r => r.json())
    .then(js => {
      js.map(x => {
        this.state.obrasPorCidade[x.municipio].push(x.name)
      })
    })
    .then(res => {
      let cidades = Object.keys(this.state.obrasPorCidade)
      let qtd = []
      for(var i in cidades) {
        qtd.push([cidades[i], this.state.obrasPorCidade[cidades[i]].length])
      }
      qtd.sort(function(a, b) {
          return b[1]-a[1];
      });
      this.setState({
        ranking: qtd
      });
      console.log(this.state.ranking[0])
    })
    .then(response => {
      this.setState({loading: false})
    })


  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {


    return (

      <LoadingScreen
        loading={this.state.loading}
        bgColor='#b46ee8'
        spinnerColor='#64308b'
        textColor='#676767'
        text='Carregando Dados...'
      >
      <Grid className="tudo">

        <PanelGroup
          accordion
          id="accordion-controlled-example"
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}>
            <Panel eventKey="1" className="panel">
                <Panel.Heading>
                  <Panel.Title toggle className="opcao">veja todas as obras de sua cidade:</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                <div>
                  {this.state.cidades.map(x => <div className="cidade"><a>{x}</a></div>)}
                </div>
                </Panel.Body>
            </Panel>

            <Panel eventKey="2">
                <Panel.Heading>
                  <Panel.Title toggle className="opcao">Top 1o cidades com mais obras:</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                    <div className="cidadeRanking">1 - {this.state.ranking[0]}</div>
                    <div className="cidadeRanking">2 - {this.state.ranking[1]}</div>
                    <div className="cidadeRanking">3 - {this.state.ranking[2]}</div>
                    <div className="cidadeRanking">4 - {this.state.ranking[3]}</div>
                    <div className="cidadeRanking">5 - {this.state.ranking[4]}</div>
                    <div className="cidadeRanking">6 - {this.state.ranking[5]}</div>
                    <div className="cidadeRanking">7 - {this.state.ranking[6]}</div>
                    <div className="cidadeRanking">8 - {this.state.ranking[7]}</div>
                    <div className="cidadeRanking">9 - {this.state.ranking[8]}</div>
                    <div className="cidadeRanking">10 - {this.state.ranking[9]}</div>
                </Panel.Body>
            </Panel>

            <Panel eventKey="3">
                <Panel.Heading>
                  <Panel.Title toggle className="opcao">Top 1o cidades com menos obras:</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                </Panel.Body>
            </Panel>

            <Panel eventKey="4">
                <Panel.Heading>
                  <Panel.Title toggle className="opcao">Obras atrasadas ( por cidade ):</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                <div>
                  {this.state.cidades.map(x => <div className="cidade"><a>{x}</a></div>)}
                </div>
                </Panel.Body>
            </Panel>
          </PanelGroup>
      </Grid>
      </LoadingScreen>
    )
  }
}
