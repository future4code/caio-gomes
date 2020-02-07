import React, { useState } from "react";
import style from "./style.module.css";
import Buttons from "../Buttons/buttonSignup";
import * as firebase from "firebase";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { routes } from "../../containers/Router";

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmitLogin = async e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        console.log("Sucesso: ", res);
      })
      .catch(e => console.log("erro: ", e));
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onClicksend = () => {
    this.props.goToHome();
  };

  render() {
    console.log(this.state);
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
        <form className={style.formBox} onSubmit={this.onSubmitLogin}>
          <div className={style.formGroup}>
            <div className={style.inputGroup}>
              <input
                className={`${style.textInput} ${style.emailInput}`}
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleInput}
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
                value={this.state.password}
                onChange={this.handleInput}
                placeholder="Senha"
                required
              />
            </div>
          </div>
          <button
            onClick={this.onClicksend}
            type="submit"
            className={style.sendBtn}
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goToHome: () => dispatch(push(routes.home))
  };
};

export default connect(null, mapDispatchToProps)(FormLogin);
