import React from 'react';
import {PanelGroup, Panel, Alert, Grid} from 'react-bootstrap';
import './dadosGerados.css';
import BarChart from "react-svg-bar-chart"
import LoadingScreen from 'react-loading-screen';

export default class ObrasCidades extends React.Component {


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
      setTimeout(js.map(x => {
              this.state.obrasPorCidade[x.municipio].push(x.name)
            }), 1000)

    })
    .then(res => {
      let cidades = Object.keys(this.state.obrasPorCidade)
      let qtd = []
      for(var i in cidades) {
        qtd.push([cidades[i] + " ", this.state.obrasPorCidade[cidades[i]].length])
      }
      qtd.sort(function(a, b) {
          return b[1]-a[1];
      });
      this.setState({
        ranking: qtd
      });
      console.log(this.state.ranking.length)
    })
    .then(response => {
      this.setState({loading: true})
    })


  }

  handleSelect(activeKey) {
    this.setState({ activeKey });
  }

  render() {


    return (


      <Grid className="tudo">

        Todas as Obras de cada cidade
      </Grid>
    )
  }
}
