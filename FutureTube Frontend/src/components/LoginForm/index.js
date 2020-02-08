import React, { useState } from "react";
import style from "./style.module.css";
import Buttons from "../Buttons/buttonSignup";

const FormLogin = ({ loginError, onSubmitLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    onSubmitLogin({ email, password });
  };

  return (
    <div className={style.formContainer}>
      <h1 className={style.title}>Acesse sua conta</h1>
      <div className={style.formText}>
        <span className={style.subTitle}>
          Assista aos melhores clipes e videos, siga criadores originais de
          conteúdo <br />
          Crie, compartilhe sua visão do mundo e seja um Futurer.
        </span>
      </div>
      <Buttons />
      <div className={style.separatorWrapper}>
        <hr className={style.separatorLine} />
        <p className={style.separatorOr}>ou</p>
        <hr className={style.separatorLine} />
      </div>
      <form className={style.formBox} onSubmit={e => onSubmit(e)}>
        <div className={style.formGroup}>
          <div className={style.inputGroup}>
            <input
              className={`${style.textInput} ${style.emailInput}`}
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className={style.inputGroup}>
            <input
              className={`${style.textInput} ${style.emailInput}`}
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Senha"
              required
            />
          </div>
          <span>{loginError}</span>
        </div>
        <button type="submit" className={style.sendBtn}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default FormLogin;