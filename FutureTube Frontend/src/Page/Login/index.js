import React, { useState, useEffect } from "react";
import UserAccount from "../../containers/Account";


const Login = props => {
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
  
  }, []);

  const onSubmitLogin = async ({ email, password }) => {
    
  };

  return <UserAccount loginError={loginError} onSubmitLogin={onSubmitLogin} />;
};

export default Login;
