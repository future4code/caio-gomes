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
 
 

  mudandoValorOption = (event) => {
    this.setState({tipoDeEstudo: event.target.value}, () => {
      console.log(this.state.tipoDeEstudo)
      })
    }
  
 clickButtonContinue = () => {
  
   if (this.state.tipoDeEstudo === "medioCompleto"){
     return <FormEtapa3/>
  } else if (this.state.tipoDeEstudo === "medioIncompleto"){
     return <FormEtapa3/>
   } else if (this.state.tipoDeEstudo === "superiorIncompleto"){
      return <FormEtapa2/>
   }else if (this.state.tipoDeEstudo === "superiorCompleto"){
      return<FormEtapa2/>
  } else {
      console.log("Selecione uma escolaridade")
  }

}
 

render() {  

  

  return (
    <div className="App">
        <FormEtapa1
          onChangeValueOption={this.mudandoValorOption}
        />
        {this.clickButtonContinue()}
        <button onClick={this.clickButtonContinue}>Continuar</button>
      </div>
    );
  }
}

export default App;
