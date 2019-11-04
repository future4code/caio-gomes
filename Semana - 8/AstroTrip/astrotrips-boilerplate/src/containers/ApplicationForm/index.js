import React from 'react';

class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>AstroTrip</h1>
        <h2>Encontre as melhores viagens espaciais!</h2>
        <button>Quero ser Tripulante!</button>
        <button>Sou o Capitão!</button>
      </div>
    )
  }
}

export default ApplicationForm;

