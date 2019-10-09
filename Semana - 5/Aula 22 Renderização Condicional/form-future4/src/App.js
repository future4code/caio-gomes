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
      etapaAtual: false,
      ensinoMedioIncompleto: false,
      ensinoMedioCompleto: false,
      ensinoSuperiorIncompleto: false,
      ensinoSuperiorCompleto: false
    }
  }
 
 

  mudandoValorOption = (event) => {
    this.setState({tipoDeEstudo: event.target.value}, () => {
    console.log(this.state.tipoDeEstudo)
      })
    }
  
  clickButtonContinue = () => {
    if (this.state.tipoDeEstudo === "medioCompleto"){
      this.setState({ensinoMedioCompleto: true})
      this.setState({etapaAtual: false})
    } else if (this.state.tipoDeEstudo === "medioIncompleto") {
      this.setState({ensinoMedioIncompleto: true})
      this.setState({etapaAtual: false})
    } else if (this.state.tipoDeEstudo === "superiorIncompleto") {
      this.setState({ensinoSuperiorIncompleto: true})
      this.setState({etapaAtual: true})
    } else if (this.state.tipoDeEstudo === "superiorCompleto") {
      this.setState({ensinoSuperiorCompleto: true})
      this.setState({etapaAtual: true})
    }
}
 

render() {  
  let etapa;
  if (this.state.etapaAtual){
    etapa = <FormEtapa2/>
  } else {
    etapa = <FormEtapa3/>
  }
  
  return (
    <div className="App">
        <FormEtapa1
        onChangeValueOption={this.mudandoValorOption}
        />
        {etapa}    
        <button onClick={this.clickButtonContinue}>Continuar</button>
    </div>
    );
  }
}

export default App;
