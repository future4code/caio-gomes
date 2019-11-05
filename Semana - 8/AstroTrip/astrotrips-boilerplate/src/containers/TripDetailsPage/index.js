import React from 'react';
import {connect} from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router'

class TripDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const details = this.props.tripSelected
    
    return (
      <div>
        <h1>Detalhe das viagens</h1>
        <h3>{details.name}</h3>
        <p>Nome do Planeta:{details.planet}</p>
        <p>Descrição:{details.description}</p>
        <p>Data da Viagem: {details.date}</p>
        <p>Duração da Viagem:{details.durationInDays}</p>
        <div>
          {this.props.candidateTrip.map((candidate) => {
            return <div>
              <p>{candidate.name}</p>
              <p>{candidate.age}</p>
              <p>{candidate.country}</p>
              <p>{candidate.applicationText}</p>
            </div>
          })}
        </div>
        <button onClick={this.props.goToHome}>HOME</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
 return {
    tripSelected: state.trips.selectedTrip,
    candidateTrip: state.trips.selectedTrip.candidates || []
  }
}

const mapDispatchToProps = dispatch => ({
  goToHome: () => dispatch(push(routes.root))
})

export default connect (mapStateToProps,mapDispatchToProps) (TripDetailPage);