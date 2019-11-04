import React from 'react';
import {connect} from 'react-redux'
import { fetchCandidates } from '../../actions'

class TripDetailPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    return this.props.getAllCandidates()
  }

  render() {
    return (
      <div>
        <h1>AstroTrip</h1>
        {this.props.listCandidate.map((candidate)=> { 
          return <div>
            <li>{candidate.name}</li>
            <li>{candidate.country}</li>
            <li>{candidate.applicationText}</li>
            <li>{candidate.profession}</li>
            <li>{candidate.age}</li>
          </div>
          }
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.trips.allTrips)
  return {
    listCandidate: state.trips.allTrips
  }
}

const mapDispatchToProps = dispatch => ({
  getAllCandidates: (id) => dispatch(fetchCandidates(id))
})

export default connect (mapStateToProps,mapDispatchToProps) (TripDetailPage);