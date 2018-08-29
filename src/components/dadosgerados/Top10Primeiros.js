import React from 'react';
import {Grid, Col, Row, PageHeader} from 'react-bootstrap';
import './dadosGerados.css';
import CardRanking from "./CardRanking";

export default class Top10Primeiros extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cidades: {},
      ranking: [],
      loading: false
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
          if(array[j] === actual) {
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
      r.map(x => {
        if(this.state.cidades[x.municipio] === undefined) {
          this.state.cidades[x.municipio] = 1;
        } else {
          this.state.cidades[x.municipio] += 1;
        }
      })
    })
    .then(res => {
      let rankingAux = []
      for(var obra in this.state.cidades) {
        rankingAux.push([obra, this.state.cidades[obra]])
      }

      function Comparator(a, b) {
         if (a[1] < b[1]) return 1;
         if (a[1] > b[1]) return -1;
         return 0;
      }

      rankingAux.sort(Comparator)
      this.setState({ranking: rankingAux})
    })
    .then(response => {
      this.setState({loading: true})
    })

  }

  render() {
    return (
      <Grid className="tudo">
        <Row>
          <PageHeader className="header">

                <header className="titleObras">VEJA AS OBRAS DAS CIDADES DA PARAIBA:</header><p/>
                <div className="">
                  {this.state.loading === true ?
                    this.state.ranking.map((curr, index) => {if(index < 10) return(<CardRanking cidade={curr[0]} qtd={curr[1]}/>)})
                     : <div>carregando...</div>
                  }
                </div>

          </PageHeader>
        </Row>
      </Grid>
    )
  }
}
