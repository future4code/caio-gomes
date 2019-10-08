import React from 'react';
import FormEtapa1 from './components/FormEtapa1'
import FormEtapa2 from './components/FormEtapa2'
import FormEtapa3 from './components/FormEtapa3'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ensinoMedioIncompleto: true,
      ensinoMedioCompleto: true,
      ensinoSuperiorIncompleto: true,
      ensinoSuperiorCompleto: true      
    }
  }
 
  
 
render() {  
  return (
     <div className="App">
        <FormEtapa1
        medioIncompleto={this.state.ensinoMedioIncompleto}
        medioCompleto={this.state.ensinoMedioCompleto}
        superiorIncompleto={this.state.ensinoSuperiorIncompleto}
        superiorCompleto={this.state.ensinoSuperiorCompleto}
        onClickButtonContinue={this.clickButtonContinue}
        />
        <FormEtapa2/>
        <FormEtapa3/>
      </div>
    );
  }
}

export default App;
