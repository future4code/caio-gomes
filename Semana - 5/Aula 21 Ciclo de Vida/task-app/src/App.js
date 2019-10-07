import React from 'react';
import './App.css';
import { NovaTarefa } from './components/NovaTarefa';
import  { Tarefas } from './components/Tarefas';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputTarefa: "",
      mostrarInput: false,
    }
  
  }
  
  
  criandoNovaTarefa = (event) => {
   
    }

  render(){ 
    return (
      <div className="App">
        <NovaTarefa>
         criandoTarefa={this.criandoNovaTarefa}
         tarefas={this.state.mostrarInput}
        </NovaTarefa>
        <Tarefas></Tarefas>
      </div>
    );
  }
}

export default App;
