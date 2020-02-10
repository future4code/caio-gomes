import axios from "axios";
import { routes } from "../containers/Router";
import { push } from "connected-react-router";

export const login = (email, password) => async dispatch => {
  try {
    dispatch(clearErrorMessageAction());
    const body = { email, password };

    const response = await axios.post(`${urlBase}/login`, body);

    window.localStorage.setItem("token", response.data.token);
    dispatch(setProfile(response.data.user));

    if (response.status === 200) {
      dispatch(push(routes.feed));
    }
  } catch (e) {
    let error = e.message;
    if (error) {
      error = "Email ou senha inválidos";
    }
    dispatch(setErrorMessageAction(error));
  }
};

export const signUp = (firstName, lastName, email, password, birthday, photo) => async dispatch => {
	const newUser = {
			firstName,
			lastName,
			email,
			password,
			birthday,
			photo
	}
	const response = await axios.post(
			`${urlBase}/signup`, newUser
	);

	window.localStorage.setItem('token', response.data.token);

	if (response.status === 200) {
			dispatch(push(routes.address))
	}
}