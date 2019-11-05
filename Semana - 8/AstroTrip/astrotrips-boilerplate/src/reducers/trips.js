const initialState = {
  allTrips: [],
  selectedTrip: {}
}

const trips = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_TRIPS":
      return { ...state, allTrips: action.payload.trips}
    case "LIST_DETAILS":
      return { ...state, selectedTrip: action.payload.detailTrips}
      default:
      return state;
    }
}

export default trips;