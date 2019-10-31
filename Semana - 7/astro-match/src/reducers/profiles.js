const initialState = {
  newPerson: "",
}

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_PERSON":
      return { ...state, newPerson: action.payload.newPerson }
    default:
      return state;
  }
}



export default profiles;
