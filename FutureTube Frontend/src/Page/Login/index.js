import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import UserAccount from "../../containers/Account";
import { login, signUp } from "../../actions/auth";

const Login = props => {
  const [loginError, setLoginError] = useState("");

  const onSubmitLogin = ({ email, password }) => {
    props.makeLogin(email, password);
  };

  const onSignup = ({
    firstName,
    lastName,
    email,
    password,
    birthday,
    photo
  }) => {
    props.makeSignup(firstName, lastName, email, password, birthday, photo);
  };

  return (
    <UserAccount
      loginError={loginError}
      onSubmitLogin={onSubmitLogin}
      onSignup={onSignup}
    />
  );
};

const mapDispatchToProps = dispatch => {
  return {
    makeLogin: (email, password) => dispatch(login(email, password)),
    makeSignup: (firstName, lastName, email, password, birthday, photo) =>
      dispatch(signUp(firstName, lastName, email, password, birthday, photo))
  };
};

export default connect(null, mapDispatchToProps)(Login);
