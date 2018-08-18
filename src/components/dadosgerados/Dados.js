import React from 'react';
import ReactDOM from 'react-dom';




export default class Dados extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      nomePrefeitos: [],
      cidades: [],
      obrasPorCidade: {}
    }
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
    fetch("https://intense-eyrie-47894.herokuapp.com/obra")
    .then(r => r.json())
    .then(js => {
      js.map(x => {
        this.state.obrasPorCidade[x.municipio] = []
        console.log(this.state.obrasPorCidade)
      })
    })

    // mapeia obras para cidade
    fetch("https://intense-eyrie-47894.herokuapp.com/obra")
    .then(r => r.json())
    .then(js => {
      js.map(x => {
        this.state.obrasPorCidade[x.municipio].push(x.name)
      })
    })

  }

  mostraPrefeitos = (e) => {
    console.log("nobho")

    console.log(this.state.obrasPorCidade["Cajazeiras"])
    // ReactDOM.render(this.state.nomePrefeitos.map(x => <div>{x}</div>), document.getElementById('prefeitos'))
  }

  render() {
    return (
      <div>
        <div>Veja todas as obras de cidades:</div>
        <div>Top 10 de cidades que mais concluem obras:</div>
        <div>Top 10 de cidades que menos concluem obras:</div>
        <div>Obras atrasadas de acordo com a cidades:</div>


      </div >
    )
  }
}
