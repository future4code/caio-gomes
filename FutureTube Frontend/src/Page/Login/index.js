import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import UserAccount from "../../containers/Account";
import { login } from "../../actions/auth";

const Login = props => {
  const [loginError, setLoginError] = useState("");

  const onSubmitLogin = ({ email, password }) => {
    props.makeLogin(email, password);
  };

  return <UserAccount loginError={loginError} onSubmitLogin={onSubmitLogin} />;
};

const mapDispatchToProps = dispatch => {
  return {
    makeLogin: (email, password) => dispatch(login(email, password))
  };
};

export default connect(null, mapDispatchToProps)(Login);
