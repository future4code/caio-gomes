const initialState = {
  allTrips: []
}

const trips = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_TRIPS":
      return { ...state, allTrips: action.payload.trips}
    case "LIST_CANDIDATES":
      const tripsCandidates = {
        id: action.payload.id
      }
      const newTripCandidates = [...state.allTrips, tripsCandidates];
      return { ...state, allTrips: newTripCandidates};
      default:
      return state;
    }
}

export default trips;