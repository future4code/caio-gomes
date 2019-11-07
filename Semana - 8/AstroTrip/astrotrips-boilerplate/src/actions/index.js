import axios from 'axios'
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const setErrorMessageAction = message => {
  return {
    type: "SET_ERROR_MESSAGE",
    payload: {
      message
    }
  };
};

const clearErrorMessageAction = () => {
  return {
    type: "CLEAR_ERROR_MESSAGE"
  };
};

const getTrips = trips => ({
  type: "SET_TRIPS",
  payload: {
    trips,
  }
});

export const fetchTrips = () => async (dispatch) => {
  const token = window.localStorage.getItem('token')
  const response = await axios.get(
    "https://us-central1-missao-newton.cloudfunctions.net/futureX/caio/trips", 
    {
      headers: {
        auth: token
      }
    })

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
  const token = window.localStorage.getItem('token')
  const response = await axios.get(
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/caio/trip/${id}`,
    {
      headers: {
        auth: token
      }
    })

  dispatch(getCandidate(response.data.trip)
  )
}

export const setNewTrip = (trip) => async () => {
  console.log(trip)
  const token = window.localStorage.getItem('token')
  const data = {
    name: trip.nameValue,
    planet: trip.planetValue,
    date: trip.dateValue,
    description: trip.descriptionValue,
    durationInDays: trip.durationInDaysValue,
  }
  await axios.post(
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/caio/trips`,
    data,
    {
      headers: {
        auth: token
      }
    },
    
  )
}

export const applyToTrip = (trip, id) => async () => {
  await axios.post(
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/caio/trips/${id}/apply`,
    {
      'header': "Content-Type: application/json"
    },
    {
      'data': {
        'name': trip.name,
        'age': trip.age,
        'applicationText': trip.aplication,
        'profession': trip.profession,
        "country": trip.country
      }
    }
  )
}

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(clearErrorMessageAction());
    const response = await axios.post(
      "https://us-central1-missao-newton.cloudfunctions.net/futureX/caio/login",
      {
        'header': "Content-type: application/json"
      },
      {
        'data': {
          email,
          password
        }
      }
    );
    window.localStorage.setItem("token", response.data.token);
    dispatch(push(routes.trips));
  } catch (e) {
   dispatch(setErrorMessageAction(e.message));
  }
};