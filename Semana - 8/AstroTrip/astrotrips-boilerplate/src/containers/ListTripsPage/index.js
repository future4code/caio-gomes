import React from 'react';
import {connect} from 'react-redux'
import { fetchTrips } from "../../actions"

class ListTripsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    return this.props.getAllTrips()
  }
  render() {
    return (
      <div>
        <h1>Viagens</h1>
        {this.props.listTrips.map((trips) => {
          return <div key={trips.id}>
            <h1>{trips.name}</h1>
            <li>{trips.description}</li>
            <li>{trips.planet}</li>
            <li>{trips.durationInDays}</li>
            <li>{trips.date}</li>
          </div>
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.trips.allTrips)
  return {
    listTrips: state.trips.allTrips
  }
}

const mapDispatchToProps = dispatch => ({
  getAllTrips: () => dispatch(fetchTrips())
})
export default connect (mapStateToProps, mapDispatchToProps)(ListTripsPage)