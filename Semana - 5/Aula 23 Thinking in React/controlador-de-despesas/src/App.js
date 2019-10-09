import React from 'react';
import './App.css';
import { Cadastro } from './components/Cadastro/Cadastro'
import { Extrato } from './components/Extrato/Extrato';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaDespesas: [],
    }

  }

  adicionarDespesa = (novaDespesa) => {
    const novaListaDespesa = [...this.state.listaDespesas, novaDespesa]
    this.setState({ listaDespesas: novaListaDespesa })
    console.log(this.state.listaDespesas)
  }



  render() {
    const despesasFeitas = this.state.listaDespesas.map((despesa, index) => {
      return <div key={index}>{despesa} </div>
    })
    return (
      <div className="App">

        <Cadastro
          criarDespesa={this.adicionarDespesa}
        />
        {despesasFeitas}
        <Extrato
          
        />
      </div>
    );
  }

}

export default App;
