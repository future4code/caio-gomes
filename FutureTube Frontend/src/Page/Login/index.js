import React, { useState, useEffect } from "react";
import UserAccount from "../../containers/Account";
import firebase from "../../firebase";

const Login = props => {
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      user ? console.log("USUARIO", user) : console.log("USUARIO SAIU");
    });
  }, []);

  const onSubmitLogin = async ({ email, password }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => props.history.push("/home"))
      .catch(() => setLoginError("E-mail ou senha inválido!"));
  };

  return <UserAccount loginError={loginError} onSubmitLogin={onSubmitLogin} />;
};

export default Login;
