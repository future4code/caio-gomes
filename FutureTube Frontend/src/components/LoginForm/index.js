import React, { useState } from "react";
import style from "./style.module.css";
import { connect } from "react-redux";

const FormLogin = ({ currentError, onSubmitLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    onSubmitLogin({ email, password });
  };

 const keyPressed = e => {
    if (e.key === "Enter") {
      onSubmit()
    }
  }

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

      <form className={style.formBox} onSubmit={e => onSubmit(e) }>
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
          <span>{currentError}</span>
        </div>

        <button onKeyPress={keyPressed} type="submit" className={style.sendBtn}>
          Entrar
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentError: state.auth.loginError
  };
};

export default connect(mapStateToProps, null)(FormLogin);
