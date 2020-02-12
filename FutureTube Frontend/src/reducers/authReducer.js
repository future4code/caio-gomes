const initialState = {
  loginError: "",
  successMessage: ""
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ERROR_MESSAGE":
      return { ...state, loginError: action.payload.message };
    case "CLEAR_ERROR_MESSAGE":
      return { ...state, loginError: undefined };
    case "SET_SUCCESS_MESSAGE":
      return { ...state, successMessage: action.payload.message };
    default:
      return state;
  }
};

export default auth;
