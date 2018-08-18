import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import {PanelGroup, Panel, Grid, Button, DropdownButton, MenuItem} from 'react-bootstrap';
import './dadosGerados.css';

export default class Dados extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      nomePrefeitos: [],
      cidades: [],
      obrasPorCidade: {},
      activeKey: '0'
    }

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  componentDidMount = () => {
    //armazena todos os prefeitos
    fetch("https://politicosgo.herokuapp.com/prefeitos")
    .then(r => r.json())
    .then(js => {
      js.map(x => {
        this.setState(prevState => ({
          nomePrefeitos: [...prevState.nomePrefeitos, x["nome"]]
        }))
      })
    })

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
    }).then(resp => {
      this.state.cidades.sort(function(a, b){
          if(a < b) return -1;
          if(a > b) return 1;
          return 0;
      })
    })

    // mapeia obras para cidade
    fetch("https://politicosgo.herokuapp.com/obras")
    .then(r => r.json())
    .then(js => {
      js.map(x => {
        this.state.obrasPorCidade[x.municipio].push(x.name)
      })
    })

  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {
    return (
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
                  <Panel.Title toggle className="opcao">Top 1o de cidades que mais concluem obras:</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>Panel content 1</Panel.Body>
            </Panel>

            <Panel eventKey="3">
                <Panel.Heading>
                  <Panel.Title toggle className="opcao">Top 1o de cidades que menos concluem obras:</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>Panel content 1</Panel.Body>
            </Panel>

            <Panel eventKey="4">
                <Panel.Heading>
                  <Panel.Title toggle className="opcao">Obras atrasadas ( por cidade ):</Panel.Title>
                </Panel.Heading>
                <Panel.Body collapsible>
                <div>
                  {Object.keys(this.state.cidades).map(x => <div className="cidade"><a>{x}</a></div>)}
                </div>
                </Panel.Body>
            </Panel>

        </PanelGroup>


      </Grid>
    )
  }
}
