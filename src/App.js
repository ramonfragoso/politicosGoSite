import React, { Component } from 'react';
import HomePage from './components/HomePage';
import {Route} from 'react-router';
import DadosGerados from './components/dadosgerados/DadosGerados.js';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/dados" component={DadosGerados}/>
      </div>
    );
  }
}

export default App;
