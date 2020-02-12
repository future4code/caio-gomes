import axios from "axios";
import { routes } from "../containers/Router";
import { push } from "connected-react-router";

const urlBase =
  "https://lwicg7zvyc.execute-api.us-east-1.amazonaws.com/FutureTube";

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

const setSuccessMessage = message => {
  return {
    type: "SET_SUCCESS_MESSAGE",
    payload: {
      message
    }
  }
}

export const login = (email, password) => async dispatch => {
  try {
    dispatch(clearErrorMessageAction());
    const body = { email, password };
    const response = await axios.post(`${urlBase}/login`, body);

    window.localStorage.setItem("token", response.data.result.token);

    if (response.status === 200) {
      dispatch(push(routes.home));
    }
  } catch (e) {
    let error = e.message;
    if (error) {
      error = "Email ou senha inválidos";
    }
    dispatch(setErrorMessageAction(error));
  }
};

export const changePassword = (oldPassword, newPassword) => async dispatch => {
  const token = window.localStorage.getItem("token");
  const body = { oldPassword, newPassword };
  const response = await axios.post(`${urlBase}/changePassword`, body, {
    headers: {
      auth: token
    }
  });

  if (response.status === 200) {
    const message = "Senha alterada com sucesso!"
    dispatch(setSuccessMessage(message));
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

  window.localStorage.setItem("token", response.data.result.token);

  if (response.status === 200) {
    dispatch(push(routes.home));
  }
};
