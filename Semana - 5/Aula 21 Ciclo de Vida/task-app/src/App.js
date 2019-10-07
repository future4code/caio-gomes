import React from 'react';
import './App.css';
import { NovaTarefa } from './components/NovaTarefa';
import  { Tarefas } from './components/Tarefas';
import { InputNovaTarefa } from './components/InputNovaTarefa';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mostrarInput: false,
      inputTarefa: "",
      listaDeTarefas : [],
    
    }
  
  }
  
  criandoNovaTarefa = () => {
      const mostrarInputNovo = this.state.mostrarInput;
      this.setState({mostrarInput: !mostrarInputNovo})
      console.log(this.state)
  }

  valorDaTarefaInput = (event) => {
    this.setState({ inputTarefa: event.target.value})
  }

  gerarNovaTarefa = () => {
    const { listaDeTarefas } = this.state;
    listaDeTarefas.push(this.state.inputTarefa);
    this.setState({listaDeTarefas})
  }

  editarTarefa = () => {

  }


  render(){ 
    return (
      <div className="App">
        <NovaTarefa
          criandoTarefa={this.criandoNovaTarefa}
          tarefas={this.state.mostrarInput}
          onChangeTask={this.valorDaTarefaInput}
          inputNovo={this.state.inputTarefa}
          gerarTarefa={this.gerarNovaTarefa}
        />
        {console.log(this.state)}
        <Tarefas>
          {this.state.listaDeTarefas.map((tarefa, index) => {
            return <div>
              <p key={index}>{tarefa}</p>
              <button onClick={this.state.editarTarefa}>editar</button>
                if () {
                  <React.Fragment>
                    <input type="text" value={this.state.inputTarefa}/>
                    <button>Salvar</button>
                  </React.Fragment>
                }
              <button>apagar</button>
              </div>
            }
          )}
        </Tarefas>
      </div>
    );
  }
}

export default App;
