import React, { useState } from "react";
import style from "./style.module.css";
import Dropzone from "../Dropzone";
import DropzonePhoto from "../Dropzone";

const FormSignup = ({ onSignup }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: "",
    birthday: ""
  });
  const [error, setError] = useState("");

  const handleInput = event => {
    const {
      target: { value, name }
    } = event;

    setUser({
      ...user,
      [name]: value
    });
  };

  const keyPressed = e => {
    if (e.key === "Enter") {
      validatePassword();
    }
  };

  const validatePassword = event => {
    event.preventDefault();
    const { password, confirmPassword } = user;

    if (password === confirmPassword) {
      onSignup(user);
    } else {
      setError("As senhas diferem");
    }
  };

  return (
    <div className={style.formContainer}>
      <h1 className={style.title}>Crie sua conta</h1>
      <div className={style.formText}>
        <span className={style.subTitle}>
          Assista aos melhores clipes e videos, siga criadores originais de
          conteúdo <br />
          Crie, compartilhe sua visão do mundo e seja um Futurer.
        </span>
      </div>
      <form
        className={style.formBox}
        onSubmit={validatePassword}
        onChange={handleInput}
      >
        <div className={style.formGroup}>
          <div className={style.inputGroup}>
            <input
              className={style.textInput}
              type="text"
              name={"firstName"}
              id="name"
              placeholder="Nome"
              required
            />
            <input
              className={style.textInput}
              type="text"
              name={"lastName"}
              id="lastName"
              placeholder="Sobrenome"
              required
            />
          </div>
          <div className={style.inputGroup}>
            <input
              className={`${style.textInput} ${style.emailInput}`}
              type="text"
              name={"email"}
              id="email"
              placeholder="Email"
              required
            />
          </div>
          <div className={style.inputGroup}>
            <input
              className={style.textInput}
              type="password"
              name={"password"}
              id="password"
              placeholder="Senha"
              required
            />
            <input
              className={style.textInput}
              type="password"
              name={"confirmPassword"}
              id="passwordConfirm"
              placeholder="Confirmar Senha"
              required
            />
          </div>
          <label id="birthday">Data de nascimento</label>
          <input
            id="birthday"
            className={style.dataInput}
            type="date"
            name={"birthday"}
            value="2000-01-01"
            required
          />

          <input
            className={`${style.textInput} ${style.urlPhoto}`}
            type="text"
            accept="file_extension|image/*|media_type"
            name={"photo"}
            required
            placeholder="Url da sua foto"
          />
        </div>
        <span>{error}</span>
        <button type="submit" onKeyPress={keyPressed} className={style.sendBtn}>
          Criar Conta
        </button>
      </form>
    </div>
  );
};
export default FormSignup;
