import React from 'react';
import './App.css';
import { Cadastro } from './components/Cadastro/Cadastro'
import { Extrato } from './components/Extrato/Extrato';


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaDespesas: [{
        valorDaDespesa: "",
        tipoDaDespesa: "",
        descricaoDaDespesa: ""
      }],
    }

  }

  adicionarDespesa = (novaDespesa) => {
    const novaListaDespesa = [...this.state.listaDespesas, novaDespesa]
    this.setState(this.state.listaDespesas = novaListaDespesa)
    console.log(this.state.listaDespesas)
  }



  render() {
    const novaLista = this.state.listaDespesas.map((despesa, index) => {
      return <div key={index}>
        <p>Valor da despesa em R$ :{despesa.valorDaDespesa}</p>
        <p>Tipo da Despesa :{despesa.tipoDaDespesa}</p>
        <p>Descrição da despesa :{despesa.descricaoDaDespesa}</p>
      </div >
    })

    return (
      <div className="App" >

        <Cadastro
          criarDespesa={this.adicionarDespesa}
        />
        <Extrato
          novaDespesa={novaLista}
        />
      </div>
    );
  }

}

export default App;
