const initialState = {
  newPerson: {},
  allNewPersonLiked: [],
  selectedPerson: {}
}

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_PERSON":
      return { ...state, newPerson: action.payload.newPerson }
    
    case "CHOOSE_PROFILE":
      const chooseProfile = {
        id: action.payload.id,
        choice: action.payload.choice
      }
      const newChooseProfile = [...state.allNewPersonLiked, chooseProfile];
      return { ...state, allNewPersonLiked: newChooseProfile}
    
    case "GET_MATCHES":
      return { ...state, allNewPersonLiked: action.payload.matches}
    
    case "CLEAR_PROFILES": 
      const clearProfiles = {
        id: action.payload.id
      }
      const clearAllProfiles = [...state.allNewPersonLiked, clearProfiles];
      return { ...state, allNewPersonLiked: clearAllProfiles};
      
    case "PROFILE_MATCHED":
      return { ...state, selectedPerson: action.payload.profile}
      
    default:
      return state;
  }
}

export default profiles;
