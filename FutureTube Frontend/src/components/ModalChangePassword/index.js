import React, { useState } from "react";
import Popup from "reactjs-popup";
import style from "./style.module.css";
import { changePassword } from "../../actions/auth";
import { connect } from "react-redux";

const ModalPopup = (props) => {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: ""
  });
  const [error, setError] = useState("");

  const validatePassword = event => {
    event.preventDefault();
    const { oldPassword, newPassword } = password;

    if (oldPassword !== newPassword) {
      props.password(oldPassword, newPassword);
    } else {
      setError("As senhas devem ser diferentes");
    }
  };

  const handleInput = event => {
    event.preventDefault();
    const {
      target: { value, name }
    } = event;
    setPassword({
      ...password,
      [name]: value
    });
  };

  return (
    <Popup
      trigger={<button className={style.button}> Mudar Senha </button>}
      modal
    >
      <div className={style.modal}>
        <div className={style.header}> Troque sua senha </div>
        <div className="content">
          <form
            className={style.passwordForm}
            onSubmit={validatePassword}
            onChange={handleInput}
          >
            <input
              className={style.textInput}
              type="password"
              name={"oldPassword"}
              id="oldPassword"
              placeholder="Senha Atual"
              required
            />
            <input
              className={style.textInput}
              type="password"
              name={"newPassword"}
              id="newPassword"
              placeholder="Nova Senha"
              required
            />
            <button type="submit" className={style.btnConfirm}>
              Confirmar
            </button>
          </form>
          <p>{error}</p>
        </div>
      </div>
    </Popup>
  );
};

const mapStateToProps = state => {
  return {
    successMessage: state.auth.successMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    password: (oldPassword, newPassword) =>
      dispatch(changePassword(oldPassword, newPassword))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalPopup);
