import axios from "axios";
import { routes } from "../containers/Router";
import { push } from "connected-react-router";

const urlBase =
  "https://lwicg7zvyc.execute-api.us-east-1.amazonaws.com/FutureTube";

export const login = (email, password) => async (dispatch) => {
  console.log(email, password)
  try {
    const body = { email, password };
    const response = await axios.post(`${urlBase}/login`, body);

    window.localStorage.setItem("token", response.data.token);
    if (response.status === 200) {
      dispatch(push(routes.home));
    }
  } catch (e) {
    let error = e.message;
    if (error) {
      error = "Email ou senha inválidos";
    }
  }
};

export const signUp = (
  firstName,
  lastName,
  email,
  password,
  birthday,
  photo
) => async dispatch => {
  const newUser = {
    firstName,
    lastName,
    email,
    password,
    birthday,
    photo
  };
  const response = await axios.post(`${urlBase}/createUser`, newUser);

  window.localStorage.setItem("token", response.data.token);

  if (response.status === 200) {
    dispatch(push(routes.home));
  }
};
