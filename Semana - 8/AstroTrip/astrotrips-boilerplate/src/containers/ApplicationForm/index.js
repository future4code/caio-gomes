import React from 'react';

class ApplicationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Inscreva-se em uma das nossas Trips</h1>
        <form>
          <input type="text" name="nome"/>
          <input type="text" name="nome"/>
          <input type="text" name="nome"/>
          <input type="text" name="nome"/>
          <select>
          
          </select>
          <select>

          </select>
        </form>
      </div>
    )
  }
}

export default ApplicationForm;

//  name: "Soter Padua",
// 	age: 23,
// 	applicationText: "Sou um bom candidato por X, Y e Z", // Resposta de "porque sou um bom candidato(a)?"
// 	profession: "Capturador de Bug",
// 	country: "Brasil",
// 	trip: "tripId",