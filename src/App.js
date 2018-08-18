import React, { Component } from 'react';
import HomePage from './components/HomePage';
import {Route} from 'react-router';
import DadosGerados from './components/dadosgerados/DadosGerados.js';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/dados" component={DadosGerados}/>
      </div>
    );
  }
}

export default App;
