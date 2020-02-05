import React, { useState } from "react";
import FormSignup from "../../components/SignupForm";
import logo from "../../assets/logo.png";
import style from "./style.module.css";
import FormLogin from "../../components/LoginForm";

const UserAccount = () => {
  const [account, setAccount] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.wrapperLogo}>
        <img src={logo} className={style.logo} />
        <p className={style.title}>
          Future <span className={style.titleColor}>TUBE</span>
        </p>
      </div>
      <p className={style.makeYear}>@2020</p>
      <div className={style.containerLogin}>
        <div className={style.btnLoginWrapper}>
          <button className={style.btnForm} onClick={() => setAccount(false)}>
            Criar Conta
          </button>
          <button className={style.btnForm} onClick={() => setAccount(true)}>
            Entrar
          </button>
        </div>
        {account ? <FormLogin /> : <FormSignup />}
      </div>
    </div>
  );
};

export default UserAccount;
