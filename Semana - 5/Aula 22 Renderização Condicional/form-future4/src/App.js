import React from 'react';
import FormEtapa1 from './components/FormEtapa1'
import FormEtapa2 from './components/FormEtapa2'
import FormEtapa3 from './components/FormEtapa3'
import Final from './components/Final'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tipoDeEstudo: "",
      ensinoMedioIncompleto: false,
      ensinoMedioCompleto: false,
      ensinoSuperiorIncompleto: false,
      ensinoSuperiorCompleto: false
    }
  }
 
  componentDidUpdate(event) {
    this.setState({tipoDeEstudo: event.target.value})
    
    console.log("Fui Atualizado!");
  }

  // mudandoValorOption = (event) => {
  //   this.setState({tipoDeEstudo: event.target.value})
  //   console.log(this.state.tipoDeEstudo)
  // }

 clickButtonContinue = () => {
  
}
 

render() {  

  

  return (
   
     <div className="App">
        <FormEtapa1
      
        onChangeValueOption={this.componentDidUpdate}
        />
        <button onClick={this.clickButtonContinue}>Continuar</button>
      </div>
    );
  }
}

export default App;
