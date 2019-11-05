const initialState = {
  allTrips: [],
  selectedTrip: {}
}

const trips = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TRIPS":
      return { ...state, allTrips: action.payload.trips}
    case "SET_LIST_DETAILS":
      return { ...state, selectedTrip: action.payload.tripId}
      default:
      return state;
    }
}

export default trips;