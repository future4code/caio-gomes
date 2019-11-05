import React from 'react';
import {connect} from 'react-redux'
import { fetchTrips } from "../../actions"
import { fetchDetailTrip } from '../../actions'
import { push, replace } from 'connected-react-router'
import { routes } from '../Router'

class ListTripsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.getAllTrips()
  }
  render() {
    return (
      <div>
        <h1>Viagens</h1>
        {this.props.listTrips.map((trips) => {
          return <div key={trips.name} >
            <h2 
            onClick={() => {this.props.goToTripDetail(); this.props.getListDetail(trips.id)}}>{trips.name}</h2>
          </div>
        })}
        <button onClick={this.props.goToHome}>HOME</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    listTrips: state.trips.allTrips
  }
}

const mapDispatchToProps = dispatch => ({
  getAllTrips: () => dispatch(fetchTrips()),
  goToTripDetail: () => dispatch(replace(routes.detail)),
  getListDetail: (detailTrips) => dispatch(fetchDetailTrip(detailTrips)),
  goToHome: () => dispatch(push(routes.root))
})
export default connect (mapStateToProps, mapDispatchToProps)(ListTripsPage)