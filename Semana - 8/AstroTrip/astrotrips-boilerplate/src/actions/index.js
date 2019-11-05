import axios from 'axios'

const getTrips = trips => ({
  type: "LIST_TRIPS",
  payload: {
    trips,
  }
});

export const fetchTrips = () => async (dispatch) => {
  const response = await axios.get (
    "https://us-central1-missao-newton.cloudfunctions.net/futureX/caio/trips")

    dispatch(getTrips(response.data.trips)
  )
}

const getCandidate = (detailTrips) => ({
  type: "LIST_DETAILS",
  payload: {
    detailTrips
   }
});

export const fetchDetailTrip = (id) => async (dispatch) => {
  const response = await axios.get (
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/caio/trip/${id}`)

    dispatch(getCandidate(response.data.trip)
    )
    console.log(response)
}