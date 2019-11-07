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
  const response = await axios.get(
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
  const response = await axios.get(
    `https://us-central1-missao-newton.cloudfunctions.net/futureX/caio/trip/${id}`)

  dispatch(getCandidate(response.data.trip)
  )
  console.log(response)
}


export const setNewTrip = (trip) => async () => {
  await axios.post(
    "https://us-central1-missao-newton.cloudfunctions.net/futureX/caio/trips",
    {
      'header': "Content-Type: application/json"
    },
    {
      'data': {
        'name': trip.nameValue,
        'planet': trip.planetValue,
        'date': trip.dateValue,
        'description': trip.descriptionValue,
        'durationInDays': trip.durationInDaysValue,
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
    console.log(email)
    console.log(password)
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
    console.log(e.message);
    dispatch(setErrorMessageAction(e.message));
  }
};