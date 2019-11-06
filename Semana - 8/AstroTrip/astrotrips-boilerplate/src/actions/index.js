import axios from 'axios'

const getTrips = trips => ({
  type: "SET_TRIPS",
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

const getCandidate = (tripId) => ({
  type: "SET_LIST_DETAILS",
  payload: {
    tripId
   }
});

export const fetchDetailTrip = (id) => async (dispatch) => {
  const response = await axios.get (
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/caio/trip/${id}`)

    dispatch(getCandidate(response.data.trip)
    )
    console.log(response)
}

const createNewTrip = (name, planet, date, description, durationInDays) => ({
  type: "SET_NEW_TRIP",
  payload: {
    name,
    planet,
    date,
    description,
    durationInDays
  }
});

export const setNewTrip = (name, planet, date, description, durationInDays) => async (dispatch) => {
   await axios.post (
    "https://us-central1-missao-newton.cloudfunctions.net/futureX/caio/trips",
    {
      'header': "Content-Type: application/json"
    },
    {
      'data': {
        'name': name,
        'planet': planet,
        'date': date,
        'description': description,
        'durationInDays': durationInDays
      }
    },
      dispatch(createNewTrip(name, planet, date, description, durationInDays))  
  )
}