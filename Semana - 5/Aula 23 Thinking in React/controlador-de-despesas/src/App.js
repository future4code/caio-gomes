import React from 'react';
import './App.css';
import { Cadastro } from './components/Cadastro/Cadastro'
import { Extrato } from './components/Extrato/Extrato';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaDespesas: props.novaDespesa
    }
  }






  render() {

    return (
      <div className="App">
        <Cadastro/>
        <Extrato listaDespesas={this.state.listaDespesas}/>
      </div>
    );
  }

}

export default App;
