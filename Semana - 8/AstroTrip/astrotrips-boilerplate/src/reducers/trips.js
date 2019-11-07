const initialState = {
  allTrips: [],
  selectedTrip: {},
  loginError: undefined,
}

const trips = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TRIPS":
      return { ...state, allTrips: action.payload.trips }
    case "SET_LIST_DETAILS":
      return { ...state, selectedTrip: action.payload.tripId }
    case "SET_NEW_TRIP":
      const newTrip = {
        name: action.payload.name,
        planet: action.payload.planet,
        date: action.payload.date,
        description: action.payload.description,
        durationInDays: action.payload.durationInDays
      }
      return [newTrip, ...state.allTrips]
    case "SET_ERROR_MESSAGE":
      return { ...state, loginError: action.payload.message };
    case "CLEAR_ERROR_MESSAGE":
      return { ...state, loginError: undefined };
    default:
      return state;
  }
}

export default trips;