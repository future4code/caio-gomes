import React from "react";
import video1 from "../../assets/1.mp4";
import video2 from "../../assets/2.mp4";
import video3 from "../../assets/3.mp4";
import video4 from "../../assets/4.mp4";
import style from "./style.module.css";
import logo from "../../assets/logo.png";

import FormLogin from "../../components/Login/formLogin";

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.videoBgc}>
        <img src={logo} className={style.logo} />
      </div>
      <div className={style.containerLogin}>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
