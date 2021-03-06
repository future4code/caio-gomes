import React from 'react';
import './App.css';
import { Cadastro } from './components/Cadastro/Cadastro'
import { Extrato } from './components/Extrato/Extrato';
import styled from 'styled-components'


const ContainerNovaDespesa = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 5px;
`

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      etapaCadastro: true,
      etapaExtrato: false,
      listaDespesas: [],
    }

  }

  adicionarDespesa = (novaDespesa) => {
    const novaListaDespesa = [...this.state.listaDespesas, novaDespesa]
    this.setState(this.state.listaDespesas = novaListaDespesa)
    console.log(this.state.listaDespesas)
  }


  mudaTela = () => {
    const novoEstado = this.state.etapaExtrato
    this.setState(
      {
        etapaExtrato: !novoEstado,
        etapaCadastro: novoEstado,
      })
  }

  render() {

  const novaLista = this.state.listaDespesas.map((despesa, index) => {
      return <ContainerNovaDespesa key={index}>
        <p>Valor da despesa em R$ :{despesa.valorDaDespesa}</p>
        <p>Tipo da Despesa :{despesa.tipoDaDespesa}</p>
        <p>Descrição da despesa :{despesa.descricaoDaDespesa}</p>
      </ContainerNovaDespesa >
    })

    return (

      <div className="App" >
        {this.state.etapaCadastro
          && <Cadastro
            criarDespesa={this.adicionarDespesa}
            aoClicarEmConsultar={this.mudaTela}
          />
        }
        {this.state.etapaExtrato
          && <Extrato
            novaDespesa={novaLista}
            aoClicarEmVoltar={this.mudaTela}
          />
        }
      </div>
    );
  }

}

export default App;
