import React, { useState } from "react";
import Popup from "reactjs-popup";
import style from "./style.module.css";
import { changePassword } from "../../actions/auth";
import { connect } from "react-redux";
import closeIcon from "../../assets/fechar.svg";
import verifyPassword from "../../assets/password.svg";

const ModalPopup = props => {
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
      {close => (
        <div className={style.modal}>
          <div>
            <img src={closeIcon} className={style.close} onClick={close} />
          </div>
          <div className={style.header}> Troque sua senha </div>
          <div className={style.svgWrapper}>
            <img className={style.imageSvg} src={verifyPassword} />
          </div>
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
            <p className={style.success}>{props.successMessage}</p>
            <p className={style.errorMessage}>{error}</p>
            <button type="submit" className={style.btnConfirm}>
              Confirmar
            </button>
          </form>
        </div>
      )}
    </Popup>
  );
};

const mapStateToProps = state => {
  return {
    successMessage: state.auth.successMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    password: (oldPassword, newPassword) =>
      dispatch(changePassword(oldPassword, newPassword))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalPopup);
