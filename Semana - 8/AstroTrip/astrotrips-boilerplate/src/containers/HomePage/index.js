import React from 'react';
import {connect} from 'react-redux'
import { push, replace, goBack } from 'connected-react-router'
import { routes } from '../Router'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>AstroTrip</h1>
        <h2>Encontre as melhores viagens espaciais!</h2>
        <button onClick={this.props.goToListTrips}>Quero ser Tripulante!</button>
        <button>Sou o Capitão!</button>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    goToListTrips: () => dispatch(replace(routes.trips))
  }
}
export default connect (null, mapDispatchToProps)(HomePage);