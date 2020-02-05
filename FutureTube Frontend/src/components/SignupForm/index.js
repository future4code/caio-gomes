import React from "react";
import style from "./style.module.css";
import Buttons from "../Buttons/buttons";

const FormSignup = () => {
  return (
    <div className={style.formContainer}>
      <form className={style.formBox} action="signup">
        <h1 className={style.title}>Crie sua conta</h1>
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
        <div className={style.formGroup}>
          <div className={style.inputGroup}>
            <input
              className={style.textInput}
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              required
            />
            <input
              className={style.textInput}
              type="text"
              name="name"
              id="lastName"
              placeholder="Sobrenome"
              required
            />
          </div>
          <div className={style.inputGroup}>
            <input
              className={`${style.textInput} ${style.emailInput}`}
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className={style.inputGroup}>
            <input
              className={style.textInput}
              type="password"
              name="password"
              id="password"
              placeholder="Senha"
              required
            />
            <input
              className={style.textInput}
              type="password"
              name="password"
              id="passwordConfirm"
              placeholder="Confirmar Senha"
              required
            />
          </div>
        </div>
        <button className={style.sendBtn}>Criar Conta</button>
      </form>
    </div>
  );
};

export default FormSignup;
